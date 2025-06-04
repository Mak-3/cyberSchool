import { useState } from 'react';

export default function NotifyForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/YOUR_EMAIL@example.com';
    form.method = 'POST';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'email';
    input.value = email;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();

    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="w-full  py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-4">
          🚀 Get Notified When We Launch
        </h2>
        <p className="text-gray-600 text-center mb-8 text-lg">
          Drop your email below, and we’ll ping you when we’re live!
        </p>

        {submitted ? (
          <div className="text-green-600 text-center font-medium text-lg">
            ✅ Thanks! We'll notify you soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition font-semibold"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </div>
  );
}