import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="min-h-150 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow">
        <h2 className="text-velvet-crimson text-2xl font-semibold text-center mb-2">
          Create an Account
        </h2>
        <p className="text-sm text-center mb-6">
          Please fill in the details to create your account
        </p>
        <form className="space-y-4">
          <div className="relative flex items-center">
            <FiUser size={24} className="absolute left-3 text-mist-grey" />
            <input
              type="text"
              placeholder="Full Name"
                className="input w-full border p-2 pl-10 rounded-lg"
                required
            />
          </div>
          <div className="relative flex items-center"> 
            <FiMail size={24} className="absolute left-3 text-mist-grey" />
            <input
              type="email"
                placeholder="Email"
                className="input w-full border p-2 pl-10 rounded-lg"
                required
            />
          </div>
          <div className="relative flex items-center"> 
            <FiLock size={24} className="absolute left-3 text-mist-grey" />
            <input
              type="password"
                placeholder="Password"
                className="input w-full border p-2 pl-10 rounded-lg"
                required
            />
            </div>
            <button
                type="submit"   
                className="w-full bg-velvet-crimson text-white py-2 rounded-lg"
            >
                Sign Up
            </button>
        </form>

         <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <p className="text-sm text-center mt-4 mb-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-velvet-crimson-800 cursor-pointer"
          >
            Sign in
          </span>
        </p>
        <button
          className="btn-tertiary w-full border py-2 rounded-lg flex items-center justify-center gap-2 "
        >
          <FcGoogle size={24} />
          Sign up with Google
        </button>
       </div>
     </div>
  );
}