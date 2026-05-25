"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Copy, MapPin, Navigation } from "lucide-react";
import { useLanguage } from "../../../LanguageContext";

const COPY = {
  en: {
    eyebrow: "Visit Us",
    title: "Find us on the map",
    description:
      "Stop by our location at the heart of the city, where innovation meets convenience.",
    currentLocation: "Current location",
    loading: "Loading address…",
    notFound: "Address not found",
    error: "Unable to load address",
    centerMap: "Center map",
    copyAddress: "Copy address",
    copied: "Copied!",
    locationLabel: "Location",
  },
  id: {
    eyebrow: "Kunjungi Kami",
    title: "Temukan kami di peta",
    description:
      "Mampirlah ke lokasi kami di jantung kota, tempat inovasi bertemu kenyamanan.",
    currentLocation: "Lokasi saat ini",
    loading: "Memuat alamat…",
    notFound: "Alamat tidak ditemukan",
    error: "Tidak dapat memuat alamat",
    centerMap: "Pusatkan peta",
    copyAddress: "Salin alamat",
    copied: "Tersalin!",
    locationLabel: "Lokasi",
  },
};

const ZOOM = 15;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MapComponent() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const controls = useAnimation();
  const { language } = useLanguage();
  const copy = COPY[language] ?? COPY.en;

  const latitude = import.meta.env.VITE_LATITUDE;
  const longitude = import.meta.env.VITE_LONGITUDE;

  const [address, setAddress] = useState(copy.loading);
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  useEffect(() => {
    let isCancelled = false;

    const fetchAddress = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
        );
        const data = await response.json();
        if (isCancelled) return;
        setAddress(data.display_name || copy.notFound);
      } catch (error) {
        console.error("Error fetching address:", error);
        if (!isCancelled) setAddress(copy.error);
      }
    };

    fetchAddress();

    return () => {
      isCancelled = true;
    };
  }, [latitude, longitude, copy.notFound, copy.error]);

  useEffect(() => {
    const loadLeaflet = async () => {
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);
      }

      if (window.L) return;

      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initializeMap = async () => {
      await loadLeaflet();

      if (!mapRef.current || !window.L || mapInstanceRef.current) return;

      const map = window.L.map(mapRef.current, { scrollWheelZoom: false }).setView(
        [latitude, longitude],
        ZOOM
      );

      window.L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ).addTo(map);

      const customIcon = window.L.divIcon({
        html: `
          <div class="map-marker">
            <div class="map-marker__pin"></div>
            <div class="map-marker__dot"></div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [28, 36],
        iconAnchor: [14, 32],
      });

      const marker = window.L.marker([latitude, longitude], {
        icon: customIcon,
      }).addTo(map);

      marker.bindPopup(
        `<div class="map-popup"><strong>${copy.locationLabel}</strong><br/>${
          address.length > 80 ? `${address.substring(0, 80)}…` : address
        }</div>`
      );

      mapInstanceRef.current = map;
    };

    initializeMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, address, copy.locationLabel]);

  const centerMap = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([latitude, longitude], ZOOM);
    }
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy address:", error);
    }
  };

  return (
    <section
      ref={ref}
      aria-labelledby="map-heading"
      className="relative overflow-hidden bg-gray-950 py-20 sm:py-24 lg:py-32"
    >
      <style>{`
        .map-marker {
          position: relative;
          width: 28px;
          height: 36px;
        }
        .map-marker__pin {
          position: absolute;
          inset: 0 0 8px 0;
          background: #6366f1;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          transform-origin: center;
          border: 2px solid #ffffff;
          box-shadow: 0 6px 16px rgba(0,0,0,0.35);
        }
        .map-marker__dot {
          position: absolute;
          top: 9px;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 9999px;
          transform: translateX(-50%);
        }
        .map-popup {
          background: #111827;
          color: #f9fafb;
          padding: 10px 12px;
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.4;
          max-width: 240px;
          word-break: break-word;
        }
        .map-popup strong {
          color: #f9fafb;
          font-size: 14px;
        }
        .leaflet-popup-content-wrapper,
        .leaflet-popup-tip {
          background: transparent !important;
          box-shadow: none !important;
        }
        .leaflet-popup-content { margin: 0 !important; }
      `}</style>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-purple-500/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute left-0 bottom-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur sm:text-sm"
          >
            <MapPin className="h-3.5 w-3.5 text-indigo-300" aria-hidden="true" />
            {copy.eyebrow}
          </motion.span>

          <motion.h2
            id="map-heading"
            variants={itemVariants}
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {copy.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-pretty text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {copy.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur sm:mt-16 sm:rounded-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 border-b border-white/5 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {copy.currentLocation}
                </h3>
                <p className="mt-1 break-words text-sm text-slate-400 sm:text-base">
                  {address}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:flex-shrink-0">
              <button
                type="button"
                onClick={centerMap}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/60"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                {copy.centerMap}
              </button>
              <button
                type="button"
                onClick={copyAddress}
                aria-live="polite"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/60"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? copy.copied : copy.copyAddress}
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div
              ref={mapRef}
              className="h-[320px] w-full sm:h-[420px] lg:h-[500px]"
              aria-label={copy.title}
              role="region"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
