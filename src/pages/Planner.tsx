
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface TripDetails {
  destination: string;
  startDate: string;
  endDate: string;
  tripType: string;
}

const Planner = () => {
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    destination: "",
    startDate: "",
    endDate: "",
    tripType: "",
  });

  const validateDates = (start: string, end: string): boolean => {
    if (!start || !end) return false;
    const startDate = new Date(start);
    const endDate = new Date(end);
    return startDate <= endDate;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTripDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateItinerary = () => {
    // Validate inputs
    if (!tripDetails.destination) {
      toast.error("Please enter a destination");
      return;
    }

    if (!tripDetails.startDate || !tripDetails.endDate) {
      toast.error("Please select both start and end dates");
      return;
    }

    if (!validateDates(tripDetails.startDate, tripDetails.endDate)) {
      toast.error("End date must be after start date");
      return;
    }

    if (!tripDetails.tripType) {
      toast.error("Please select a trip type");
      return;
    }

    // If all validations pass, show success and navigate
    toast.success("Generating your personalized itinerary...");
    
    // Navigate to the itinerary page with the trip details
    navigate("/itinerary", { state: { tripDetails } });
  };

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
                  name="destination"
                  value={tripDetails.destination}
                  onChange={handleInputChange}
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
                    name="startDate"
                    value={tripDetails.startDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="px-4 py-2 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent"
                  />
                  <input
                    type="date"
                    name="endDate"
                    value={tripDetails.endDate}
                    onChange={handleInputChange}
                    min={tripDetails.startDate || new Date().toISOString().split('T')[0]}
                    className="px-4 py-2 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent"
                  />
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4 text-travel-accent">
                  <Globe className="w-5 h-5 mr-2" />
                  <h2 className="text-xl font-semibold">Trip Type</h2>
                </div>
                <select
                  name="tripType"
                  value={tripDetails.tripType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent"
                >
                  <option value="">Select trip type</option>
                  <option value="adventure">Adventure</option>
                  <option value="relaxation">Relaxation</option>
                  <option value="culture">Cultural</option>
                  <option value="food">Food & Wine</option>
                </select>
              </div>
            </div>

            <Button 
              onClick={handleGenerateItinerary}
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
