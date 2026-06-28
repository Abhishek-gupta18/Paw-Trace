import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import { Filter, LocateFixed } from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Luna",
    position: [28.6139, 77.209],
    status: "Lost Cat",
  },
  {
    id: 2,
    name: "Bella",
    position: [28.5355, 77.391],
    status: "AI Match Found",
  },
  {
    id: 3,
    name: "Milo",
    position: [28.4595, 77.0266],
    status: "Volunteer Nearby",
  },
];

/* ------------------ Fly To Component ------------------ */

function FlyToLocation({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 15, {
        animate: true,
        duration: 2,
      });
    }
  }, [position, map]);

  return null;
}

/* ------------------ Community Map ------------------ */

export default function CommunityMap() {
  const [userLocation, setUserLocation] = useState(null);

  const handleLocate = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      () => {
        alert("Unable to access your location.");
      }
    );
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Community Map
          </h2>

          <p className="text-slate-500 mt-1">
            Live Lost Cat Reports
          </p>
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition">

            <Filter size={18} />

            Filters

          </button>

          <button
            onClick={handleLocate}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition"
          >
            <LocateFixed size={18} />

            My Location

          </button>

        </div>

      </div>

      {/* Leaflet */}

      <MapContainer
        center={[28.6139, 77.209]}
        zoom={11}
        style={{
          height: "500px",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Fly To User */}

        <FlyToLocation position={userLocation} />

        {/* User Marker */}

        {userLocation && (
          <Marker position={userLocation}>
            <Popup>
              <strong>You are here 📍</strong>
            </Popup>
          </Marker>
        )}

        {/* Reports */}

        {reports.map((report) => (
          <Marker
            key={report.id}
            position={report.position}
          >
            <Popup>

              <div className="space-y-3">

                <h3 className="font-bold text-lg">
                  {report.name}
                </h3>

                <p className="text-slate-600">
                  {report.status}
                </p>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-2">

                  View Report

                </button>

              </div>

            </Popup>
          </Marker>
        ))}
      </MapContainer>

    </div>
  );
}