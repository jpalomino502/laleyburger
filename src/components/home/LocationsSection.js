import { motion } from 'framer-motion';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { MapPin } from 'react-feather';

const locations = [
  {
    name: "La ley Burger Provenza",
    address: "📍 Cll 111#22-08 PROVENZA, Bucaramanga, Colombia",
    coords: { lat: 7.0820, lng: -73.1153 },
  },
  {
    name: "La ley Burger Cabecera",
    address: "📍 Cll 47 # 29-73 CABECERA, Bucaramanga, Colombia",
    coords: { lat: 7.1174, lng: -73.1113 },
  },
];

const LocationsSection = ({ activeSection, setActiveSection }) => {
  const currentLocation = locations[activeSection] || locations[0];

  return (
    <section id="ubicaciones" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Ubicaciones
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {locations.map((location, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-6 rounded-lg transition-colors ${
                  activeSection === index ? 'bg-yellow-500 text-black' : 'bg-neutral-900 hover:bg-neutral-800'
                }`}
                onClick={() => setActiveSection(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                    <p className={activeSection === index ? 'text-black/80' : 'text-neutral-400'}>
                      {location.address}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="bg-neutral-900 rounded-lg overflow-hidden h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {/* Cargar el mapa con la clave de API desde el .env */}
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={currentLocation.coords}
                zoom={15}
              >
                <Marker position={currentLocation.coords} />
              </GoogleMap>
            </LoadScript>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
