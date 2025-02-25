
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-2xl font-semibold text-travel-800">Voyage</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/explore")}
              className="text-travel-600 hover:text-travel-800"
            >
              Explore
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/planner")}
              className="text-travel-600 hover:text-travel-800"
            >
              Trip Planner
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/about")}
              className="text-travel-600 hover:text-travel-800"
            >
              About
            </Button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-travel-600 hover:text-travel-800"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              className="bg-travel-accent text-white hover:bg-travel-accent/90"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
