import React, { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    const cards = document.querySelectorAll('.experience-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transform', 'scale-105');
          entry.target.classList.remove('opacity-0');
        } else {
          entry.target.classList.remove('transform', 'scale-105');
          entry.target.classList.add('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-gray-50 via-gray-100 py-16" id="experience">
      <div className="container px-5 py-16 mx-auto text-center sm:py-28">
        <div className="mb-20">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeIn">
            Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
            This is my experience while studying at Diponegoro University.
          </p>
        </div>
        <div className="space-y-16">
          {[
            {
              company: "SMKN 53 Jakarta",
              period: "Jan 2023 - Feb 2023",
              role: "Network Engineer",
              description: "Carrying out network design or what is known as network architecture, installing and configuring the network design then monitoring the network to ensure that the network does not experience problems, troubleshooting which is carried out when interference or problems are found on a network and documentation is useful for reports and also makes the subsequent troubleshooting process easier."
            },
            {
              company: "MTQMN XVII at Malang",
              period: "Nov 2023",
              role: "UI/UX Design",
              description: "Won first place in the Diponegoro University MTQM Al-Qur'an Application Design competition, representing the university at the National MTQM at Brawijaya University, Malang. Our team, out of 50 university representatives, presented the Quran Application Design and finished in the top 18."
            },
            {
              company: "Diponegoro University",
              period: "Apr 2023 - Apr 2024",
              role: "Assistant Practicum",
              description: "During my studies I took the opportunity to become a practicum assistant, I taught: Assistant practicum of Digital System Class, Assistant practicum of Introduction To Network Class, Assistant practicum of Advanced Digital Systems Lanjut Lanjut Class, Assistant practicum of Switching, routing and wireless essentials Class, Assistant practicum of Automation and Control Systems Practical Class."
            },
            {
              company: "PT. Awan Network Indonesia",
              period: "Aug 2024 - Nov 2024",
              role: "Back End Developer",
              description: "As a Backend Developer at PT Awan Network Indonesia, I developed and optimized APIs for seamless integration between the application and the website with my team. My responsibilities included ensuring efficient backend performance, implementing scalable solutions, and collaborating with cross-functional teams to deliver a robust and secure platform that enhances user interaction and functionality."
            },
          ].map((item, index) => (
            <div
              key={index}
              className="experience-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform opacity-0 hover:scale-110 animate__animated animate__fadeIn"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 text-lg font-bold mr-4">
                  {item.company.charAt(0)}
                </div>
                <div>
                  <span className="block font-semibold text-gray-700">{item.company}</span>
                  <span className="block text-gray-500 text-sm">{item.period}</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.role}</h2>
              <p className="leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
