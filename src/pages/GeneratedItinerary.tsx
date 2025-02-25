
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Coffee, Utensils, Bed } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface ItineraryDay {
  date: string;
  activities: {
    time: string;
    activity: string;
    location: string;
    type: "morning" | "afternoon" | "evening" | "night";
  }[];
}

const GeneratedItinerary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tripDetails = location.state?.tripDetails;

  if (!tripDetails) {
    navigate("/planner");
    return null;
  }

  // This would typically come from an API, but for now we'll generate a sample itinerary
  const generateSampleItinerary = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days: ItineraryDay[] = [];
    
    for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
      days.push({
        date: date.toISOString().split('T')[0],
        activities: [
          {
            time: "09:00",
            activity: "Breakfast at local café",
            location: "Downtown Café",
            type: "morning"
          },
          {
            time: "11:00",
            activity: "Sightseeing tour",
            location: "City Center",
            type: "morning"
          },
          {
            time: "14:00",
            activity: "Local cuisine lunch",
            location: "Traditional Restaurant",
            type: "afternoon"
          },
          {
            time: "16:00",
            activity: "Cultural activities",
            location: "Museum District",
            type: "afternoon"
          },
          {
            time: "19:00",
            activity: "Dinner experience",
            location: "Waterfront Restaurant",
            type: "evening"
          },
          {
            time: "21:00",
            activity: "Evening entertainment",
            location: "City Theater",
            type: "night"
          }
        ]
      });
    }
    return days;
  };

  const itinerary = generateSampleItinerary(tripDetails.startDate, tripDetails.endDate);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "morning":
        return <Coffee className="w-5 h-5" />;
      case "afternoon":
        return <MapPin className="w-5 h-5" />;
      case "evening":
        return <Utensils className="w-5 h-5" />;
      case "night":
        return <Bed className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
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
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm mb-8">
              <h1 className="text-3xl font-bold text-travel-800 mb-4">Your Itinerary for {tripDetails.destination}</h1>
              <div className="flex flex-wrap gap-4 text-travel-600">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{new Date(tripDetails.startDate).toLocaleDateString()} - {new Date(tripDetails.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{tripDetails.destination}</span>
                </div>
              </div>
            </div>

            {itinerary.map((day, dayIndex) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm mb-6"
              >
                <h2 className="text-xl font-semibold text-travel-800 mb-4">
                  Day {dayIndex + 1} - {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </h2>
                <div className="space-y-4">
                  {day.activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start p-4 rounded-lg hover:bg-travel-50/50 transition-colors"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-travel-100 text-travel-accent mr-4">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div>
                        <div className="text-travel-accent font-medium">{activity.time}</div>
                        <div className="text-travel-800 font-medium">{activity.activity}</div>
                        <div className="text-travel-600 text-sm">{activity.location}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => navigate("/planner")}
                className="text-travel-600 hover:text-travel-800"
              >
                Back to Planner
              </Button>
              <Button
                className="bg-travel-accent text-white hover:bg-travel-accent/90"
              >
                Share Itinerary
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default GeneratedItinerary;
