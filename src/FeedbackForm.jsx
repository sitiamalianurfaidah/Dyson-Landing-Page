// FeedbackForm.jsx
import React, { useState } from 'react';

export default function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        if (feedback.trim()) {
            console.log('Feedback Submitted:', { name, feedback });
            setName('');
            setFeedback('');
            alert('Terima kasih atas feedback Anda!');
        } else {
            alert('Silakan masukkan feedback sebelum mengirim.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pastelMint to-pastelBlue flex items-center justify-center">
            <div className="w-full max-w-lg px-6 py-12 bg-pastelBlue rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">Drop Your Feedback!</h3>
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-pastelMint"
                    />
                    <textarea
                        placeholder="Insert feedback..."
                        rows="4"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-pastelMint"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg text-white font-bold bg-pastelMint hover:bg-opacity-90 focus:ring-2 focus:ring-pastelPeach"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
