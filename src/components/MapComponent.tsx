
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
  address?: string;
  onLocationSelect?: (coordinates: [number, number]) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ address, onLocationSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapToken, setMapToken] = useState<string>('');

  // For demo purposes - in a real app, this would be securely stored
  useEffect(() => {
    // Mapbox public token - this should be stored in environment variables
    // For demo purposes only
    setMapToken('pk.eyJ1IjoiZGVtby1tYXBib3giLCJhIjoiY2wxeGkwZ3ZtMDFiMDNqbzFwenprZmZjcyJ9.89CwJ5K9OaYobFvp9Vf_ew');
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapToken) return;

    // Initialize map
    mapboxgl.accessToken = mapToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.9629, 20.5937], // Center of India
      zoom: 4
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Create a default marker
    marker.current = new mapboxgl.Marker({
      color: '#3FB1CE',
      draggable: true
    })
      .setLngLat([78.9629, 20.5937])
      .addTo(map.current);

    // When marker is dragged, get new coordinates
    if (marker.current && onLocationSelect) {
      marker.current.on('dragend', () => {
        const lngLat = marker.current?.getLngLat();
        if (lngLat) {
          onLocationSelect([lngLat.lng, lngLat.lat]);
        }
      });
    }

    // Handle map click events
    if (map.current && onLocationSelect) {
      map.current.on('click', (e) => {
        marker.current?.setLngLat(e.lngLat);
        onLocationSelect([e.lngLat.lng, e.lngLat.lat]);
      });
    }

    // If address is provided, try to geocode it (in a real app)
    if (address && address.length > 5) {
      // In a real app, you would use a geocoding service here
      console.log("Would geocode address:", address);
      // For demo, we could center on a major Indian city
      const delhiCoordinates: [number, number] = [77.1025, 28.7041]; // Delhi
      map.current.flyTo({
        center: delhiCoordinates,
        zoom: 10
      });
      marker.current?.setLngLat(delhiCoordinates);
      if (onLocationSelect) {
        onLocationSelect(delhiCoordinates);
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapToken, address, onLocationSelect]);

  return (
    <div className="relative rounded-md overflow-hidden border border-gray-200">
      <div className="mb-2 text-sm text-gray-500">
        <p>Drag the marker or click on the map to select your location</p>
      </div>
      <div ref={mapContainer} className="w-full h-64 rounded-md" />
      {!mapToken && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">
            Map is loading or requires an API key...
          </p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
