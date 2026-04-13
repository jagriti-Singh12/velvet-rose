import { useState } from "react";
import { auth } from "../services/firebase";
import {FiMail, FiLock} from "react-icons/fi";
import{FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google user:", result.user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-150 flex items-center justify-center bg-stone">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        
        <h2 className="text-2xl text-velvet-crimson font-semibold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-sm text-center mb-6">
          Please enter your details to sign in.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
         <div className="relative flex items-center">
          <FiMail size={24} className="absolute left-3 text-mist-grey" />
          <input
            type="email"
            placeholder="Email"
            className="input w-full border p-2 pl-10 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            </div>
          <div className="relative flex items-center">
            <FiLock size={24} className="absolute left-3 text-mist-grey" />
            <input
              type="password"
              placeholder="Password"
              className="input w-full border p-2 pl-10 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-velvet-crimson text-white py-2 rounded-lg"
          >
            Sign in
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-sm text-center mt-4 text-mist-grey">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-velvet-crimson-800 cursor-pointer"
          >
            Create your account
          </span>
        </p>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn-tertiary text-mist-grey w-full border py-2 rounded-lg flex items-center justify-center gap-2"
        >
           <FcGoogle size={24} />    
          Continue with Google
        </button>
      </div>
    </div>
  );
}