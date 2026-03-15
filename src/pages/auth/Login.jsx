import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

export default function Login() {
const navigate=useNavigate()
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    try {

      const data = await login({ email, password }).unwrap();

      dispatch(setCredentials(data));

      toast.success("Login successful 🎉");
      navigate('/')

    } catch (error) {

      console.error(error);

      toast.error(
        error?.data?.message || "Login failed. Please try again."
      );

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-[380px]"
      >

        <h2 className="text-3xl font-bold text-center mb-8">
          Login
        </h2>

        <div className="space-y-4">

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </motion.form>

    </div>
  );
}