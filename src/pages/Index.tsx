
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Globe, Compass, MapPin, Plane, Mountain, Camera } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-travel-50 to-travel-100">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-travel-800 mb-6">
                Your Journey
                <span className="text-travel-accent"> Begins Here</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-travel-600 max-w-3xl mx-auto">
                Discover amazing destinations and create personalized itineraries with AI-powered recommendations.
                Let us help you plan the perfect adventure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                onClick={() => navigate("/planner")}
                className="bg-travel-accent text-white hover:bg-travel-accent/90 text-lg px-8 py-6"
              >
                <Plane className="mr-2" />
                Start Planning
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/explore")}
                className="text-travel-600 hover:text-travel-800 text-lg px-8 py-6"
              >
                <Compass className="mr-2" />
                Explore Destinations
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-travel-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-travel-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-travel-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Popular Destinations */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-32"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-travel-800 text-center mb-12">
              Popular Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 z-10" />
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                    <p className="text-gray-200 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {destination.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Newsletter Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-32 mb-20 bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-travel-800 mb-4">
              Get Travel Inspiration
            </h2>
            <p className="text-travel-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive curated travel tips, hidden gems, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-travel-200 focus:outline-none focus:ring-2 focus:ring-travel-accent"
              />
              <Button className="bg-travel-accent text-white hover:bg-travel-accent/90">
                Subscribe
              </Button>
            </div>
          </motion.section>
        </section>
      </main>
    </div>
  );
};

const features = [
  {
    title: "AI-Powered Suggestions",
    description: "Get personalized travel recommendations based on your preferences, budget, and travel style.",
    icon: <Globe className="w-6 h-6 text-travel-accent" />,
  },
  {
    title: "Smart Itinerary Builder",
    description: "Create and customize your perfect trip schedule with our intuitive drag-and-drop planner.",
    icon: <Compass className="w-6 h-6 text-travel-accent" />,
  },
  {
    title: "Interactive Maps",
    description: "Visualize your journey with integrated maps and discover nearby attractions and hidden gems.",
    icon: <MapPin className="w-6 h-6 text-travel-accent" />,
  },
];

const destinations = [
  {
    name: "Swiss Alps",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  },
  {
    name: "Tropical Paradise",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    name: "Mountain Lodge",
    location: "Colorado, USA",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
];

export default Index;
