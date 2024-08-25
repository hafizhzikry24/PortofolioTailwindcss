import React, { useState, useEffect } from 'react';

function Feedback() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Load feedback list from local storage when component mounts
    const savedFeedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    setFeedbackList(savedFeedbackList);
  }, []);

  useEffect(() => {
    // Save feedback list to local storage whenever it changes
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
  }, [feedbackList]);

  const handleSubmit = () => {
    if (name && message) {
      // Add new feedback to the list
      setFeedbackList([...feedbackList, { name, message }]);
      // Clear input fields
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="ml-2 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>

      <div className="mt-6">
        {feedbackList.length > 0 ? (
          feedbackList.map((feedback, index) => (
            <div
              key={index}
              className="p-4 mb-2 bg-white shadow-md rounded"
            >
              <h3 className="font-bold">{feedback.name}</h3>
              <p>{feedback.message}</p>
            </div>
          ))
        ) : (
          <p>No feedback yet.</p>
        )}
      </div>
    </div>
  );
}

export default Feedback;
