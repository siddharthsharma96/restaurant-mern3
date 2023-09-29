import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleSignUp = () => {  
      setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form", email, password);
    isSignUp ? register() : login();
    onClose();
  }

  const login = (e) => {

    fetch("http://localhost:9000/api/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password})
      }).then(response => response.json()).then(data => console.log(data));

  }

  const register = (e) => {

    fetch("http://localhost:9000/api/register", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({fullName: fullName, email: email, password: password})
    }).then(response => response.json()).then(data => console.log(data));


  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">
              {isSignUp ? 'Sign Up' : 'Log In'}
            </p>
            <button
              className="modal-close px-2 bg-indigo-500 rounded-full text-white hover:bg-indigo-400 focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 0 1 1.414 0L9 7.586l2.293-2.293a1 1 0 1 1 1.414 1.414L10.414 9l2.293 2.293a1 1 0 1 1-1.414 1.414L9 10.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L7.586 9 5.293 6.707a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {isSignUp && (  <div className="mb-6"> 
               <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Full Name
              </label>

              <input 
                type="text"
                id="text"
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
                placeholder= "Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              </div> 
              )
              }
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {isSignUp && (
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-3 py-2 border rounded-lg border-gray-400"
                  placeholder="********"
                />
              </div>
            )}
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-400 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button
                  className="text-indigo-500 hover:underline focus:outline-none"
                  onClick={toggleSignUp}
                >
                  Log in
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button
                  className="text-indigo-500 hover:underline focus:outline-none"
                  onClick={toggleSignUp}
                >
                  Sign up
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
