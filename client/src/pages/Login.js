import React from "react";
import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

export default function Login({ user }) {
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => alert("Logged in with Google"))
      .catch((e) => alert(e.message));
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      alert("Signup successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Login successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-xl mb-3">Welcome, {user.email}</h2>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          Logout
        </button>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Login / Signup</h2>

      <form onSubmit={handleEmailLogin} className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>
      </form>

      <form onSubmit={handleEmailSignup} className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="New Email"
          className="border p-2 w-full mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 w-full rounded"
        >
          Signup
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 text-white px-4 py-2 w-full rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
