import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

import {
  MapPin,
  LocateFixed,
  Calendar,
  Clock,
} from "lucide-react";

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function LostLocationForm() {
  const [position, setPosition] = useState({
    lat: 28.6139,
    lng: 77.2090,
  });

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      setPosition({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    });
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h2 className="text-3xl font-bold flex items-center gap-3 text-slate-800">
          <MapPin className="text-orange-500" />
          Lost Location
        </h2>

        <p className="text-slate-500 mt-2">
          Select where your cat was last seen.
        </p>

      </div>

      {/* Map */}

      <div className="rounded-3xl overflow-hidden border">

        <MapContainer
          center={[position.lat, position.lng]}
          zoom={14}
          style={{
            height: "400px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker
            position={position}
            setPosition={setPosition}
          />

        </MapContainer>

      </div>

      {/* Current Location */}

      <button
        onClick={getCurrentLocation}
        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
      >
        <LocateFixed size={18} />

        Use Current Location

      </button>

      {/* Date & Time */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="font-semibold">
            Last Seen Date
          </label>

          <div className="relative mt-2">

            <Calendar
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              type="date"
              className="w-full border rounded-xl pl-12 p-3"
            />

          </div>

        </div>

        <div>

          <label className="font-semibold">
            Last Seen Time
          </label>

          <div className="relative mt-2">

            <Clock
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              type="time"
              className="w-full border rounded-xl pl-12 p-3"
            />

          </div>

        </div>

      </div>

      {/* Address */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="font-semibold">
            Address
          </label>

          <input
            type="text"
            placeholder="Street Address"
            className="mt-2 w-full border rounded-xl p-3"
          />

        </div>

        <div>

          <label className="font-semibold">
            Landmark
          </label>

          <input
            type="text"
            placeholder="Near Metro Station..."
            className="mt-2 w-full border rounded-xl p-3"
          />

        </div>

        <div>

          <label className="font-semibold">
            City
          </label>

          <input
            type="text"
            placeholder="City"
            className="mt-2 w-full border rounded-xl p-3"
          />

        </div>

        <div>

          <label className="font-semibold">
            State
          </label>

          <input
            type="text"
            placeholder="State"
            className="mt-2 w-full border rounded-xl p-3"
          />

        </div>

      </div>

      {/* Notes */}

      <div>

        <label className="font-semibold">
          Additional Notes
        </label>

        <textarea
          rows={5}
          placeholder="Mention nearby shops, parks, apartment names, etc."
          className="mt-2 w-full border rounded-xl p-4 resize-none"
        />

      </div>

    </div>
  );
}