
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-travel-50 to-travel-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-travel-800 mb-4"
        >
          404
        </motion.h1>
        <p className="text-xl text-travel-600 mb-8">
          Oops! This destination doesn't exist.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-travel-accent text-white hover:bg-travel-accent/90"
        >
          Return Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
