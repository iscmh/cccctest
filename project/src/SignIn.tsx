import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SignIn() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Code validation would go here, but we're not implementing it as per requirements
    setCode('');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="w-full py-4 px-4 sm:px-6 md:px-12 flex items-center border-b border-neutral-200">
        <button 
          onClick={() => navigate('/')}
          className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Sign in to Counted</h1>
            <p className="text-neutral-600">Enter your access code to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter access code"
                className="w-full px-4 py-3 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-neutral-600">
              Not registered with Counted yet?{' '}
              <button 
                onClick={() => {
                  navigate('/#contact-form');
                  setTimeout(() => {
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Click here to apply
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}