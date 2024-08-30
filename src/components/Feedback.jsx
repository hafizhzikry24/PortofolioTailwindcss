import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = "https://mnwjnvmlgusuwjxtwczy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2pudm1sZ3VzdXdqeHR3Y3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MjE3NDUsImV4cCI6MjA0MDQ5Nzc0NX0.bU8kMSYnWaxcz47M5F-5pkkYl44PlzD58fL90IzjEGw";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Fetch feedback list from Supabase when component mounts
    fetchFeedbackList();
  }, []);

  const fetchFeedbackList = async () => {
    try {
      const { data, error } = await supabase
        .from('feedback')
        .select('name, messages, created_at')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching feedback:', error);
        return;
      }

      // Format the created_at dates
      const formattedData = data.map(feedback => ({
        ...feedback,
        created_at: new Date(feedback.created_at).toLocaleDateString('en-US', {
          weekday: 'long', // 'long' for full name, 'short' for abbreviated
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }));

      setFeedbackList(formattedData);
    } catch (error) {
      console.error('Unexpected error fetching feedback:', error);
    }
  };

  const handleSubmit = async () => {
    if (name && message) {
      try {
        // Get the current date and time
        const createdAt = new Date().toISOString();

        // Insert new feedback into Supabase
        const { data, error } = await supabase
          .from('feedback')
          .insert([{ name, messages: message, created_at: createdAt }]);

        if (error) {
          console.error('Error submitting feedback:', error);
          return;
        }

        // Format the created_at date for new feedback
        const formattedCreatedAt = new Date(createdAt).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        // Update feedback list locally without refetching
        setFeedbackList([{ name, messages: message, created_at: formattedCreatedAt }, ...feedbackList]);

        // Clear input fields
        setName('');
        setMessage('');
      } catch (error) {
        console.error('Unexpected error submitting feedback:', error);
      }
    }
  };

  return (
    <section className="text-gray-600 body-font relative bg-gradient-to-r from-gray-100 via-gray-200 py-16 animate-fadeInUp">
      <div className="container px-10 py-2 sm:py-5 mx-auto w-full sm:w-1/2">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Feedback</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Feel free if you want to share your comment or feedback for my portfolio .
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mx-auto"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={handleSubmit}
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-7 mx-auto w-full py-8 sm:py-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Comments</h3>
        <div className="overflow-x-auto">
          <div className="flex space-x-4">
            {feedbackList.length > 0 ? (
              feedbackList.map((feedback, index) => (
                <div
                  key={index}
                  className="w-72 sm:w-1/3 p-4 border-l-8 border-indigo-500 bg-gray-50 rounded-lg shadow-md flex-shrink-0"
                >
                  <h4 className="text-md font-semibold text-gray-900">{feedback.name}</h4>
                  <p className="mt-2 text-gray-700">{feedback.messages}</p>
                  <p className="mt-2 text-gray-500 text-sm">{feedback.created_at}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No feedback yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
