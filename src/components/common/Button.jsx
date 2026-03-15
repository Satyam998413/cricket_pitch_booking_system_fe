import { motion } from "framer-motion";

export default function Button({ children, ...props }) {

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="bg-green-600 text-white px-5 py-2 rounded-lg shadow"
      {...props}
    >
      {children}
    </motion.button>
  );
}