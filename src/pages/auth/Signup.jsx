import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../api/authApi";
import { toast } from "react-toastify";

export default function Signup() {

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    try {

      await register({
        username: name,
        email,
        password
      }).unwrap();

      toast.success("Account created successfully 🎉");

      // Redirect after 1 second
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {

      console.error(error);

      toast.error(
        error?.data?.message || "Signup failed. Please try again."
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
          Create Account
        </h2>

        <div className="space-y-4">

          <input
            name="name"
            placeholder="Name"
            required
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

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
          {isLoading ? "Creating Account..." : "Signup"}
        </button>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </motion.form>

    </div>

  );
}