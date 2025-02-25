
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Globe } from "lucide-react";

const Planner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-travel-50 to-travel-100">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-travel-800 mb-6">Plan Your Trip</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4 text-travel-accent">
                  <MapPin className="w-5 h-5 mr-2" />
                  <h2 className="text-xl font-semibold">Where to?</h2>
                </div>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="w-full px-4 py-2 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent"
                />
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4 text-travel-accent">
                  <Calendar className="w-5 h-5 mr-2" />
                  <h2 className="text-xl font-semibold">When?</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="px-4 py-2 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent"
                  />
                  <input
                    type="date"
                    className="px-4 py-2 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4 text-travel-accent">
                  <Globe className="w-5 h-5 mr-2" />
                  <h2 className="text-xl font-semibold">Trip Type</h2>
                </div>
                <select className="w-full px-4 py-2 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent">
                  <option value="">Select trip type</option>
                  <option value="adventure">Adventure</option>
                  <option value="relaxation">Relaxation</option>
                  <option value="culture">Cultural</option>
                  <option value="food">Food & Wine</option>
                </select>
              </div>
            </div>

            <Button 
              className="mt-8 bg-travel-accent text-white hover:bg-travel-accent/90"
            >
              Generate Itinerary
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Planner;
