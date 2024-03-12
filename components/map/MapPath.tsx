import React, { useEffect, useState, useRef } from "react";
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
  Marker,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setLocations } from "@/features/robots/position";
import { setRoute } from "@/features/robots//makeRoute";


export default function MapPath() {
  const dispatch = useDispatch();
  const [position, setPosition] = useState();
  const [clickPosition, setClickPosition] = useState();
  const [makeNewPositions, setMakeNewPositions] = useState([]);
  const lat = useSelector((state: RootState) => state.currentPositionSlice.lat);
  const lng = useSelector((state: RootState) => state.currentPositionSlice.lng);
  const click_lat = useSelector(
    (state: RootState) => state.clickPositionSlice.lat
  );
  const click_lng = useSelector(
    (state: RootState) => state.clickPositionSlice.lng
  );
  const positions = useSelector(
    (state: RootState) => state.positions.positions
  );
  const routeView = useSelector(
    (state: RootState) => state.makeRouteSlice.route
  );

  useEffect(() => {
    if (makeNewPositions.length <= 2) {
      return;
    } else {
      dispatch(setLocations({ positions: makeNewPositions }));
    }
  }, [makeNewPositions]);

  useEffect(() => {
    if (routeView) {
      setMakeNewPositions([]);
    }
  }, [routeView]);

  useEffect(() => {
    setPosition({ lat, lng });
  }, [lat, lng, positions]);

  useEffect(() => {
    setClickPosition({ lat: click_lat, lng: click_lng });
  }, [click_lat, click_lng]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={""}>
        <Map
          center={{ lat: 23.876985, lng: 90.320455 }}
          zoom={22}
          mapId={""}
          mapTypeId="satellite"
          fullscreenControl={false}
          onClick={(e) => {
            dispatch(setRoute({ route: false }));
            setMakeNewPositions([...makeNewPositions, e.detail.latLng]);
          }}
        >
          <AdvancedMarker position={position}>
            <span style={{ fontSize: "2rem" }}>🤖</span>
          </AdvancedMarker>

          {makeNewPositions.map((position, index) => (
            <AdvancedMarker
              key={index}
              position={position}
              onClick={() => {
                // remove this position
                const newPositions = makeNewPositions.filter(
                  (positione) =>
                    positione.lat !== position.lat &&
                    positione.lng !== position.lng
                );
                setMakeNewPositions(newPositions);
              }}
            >
              <div className="marker static">
                <img src="/map.png" width={30} height={30} alt="map" />
                <span
                  style={{ color: "red" }}
                  className="absolute top-1 left-[8px] rounded-lg bg-white p-[0.5px]"
                >
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
              </div>
            </AdvancedMarker>
          ))}
          <Directions />
        </Map>
      </APIProvider>
    </div>
  );
}

function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];
  const positions = useSelector(
    (state: RootState) => state.positions.positions
  );
  const routeView = useSelector(
    (state: RootState) => state.makeRouteSlice.route
  );

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map, positions]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    if (!routeView) return;
    // remove 1st and last position
    const newPositions = positions.slice(1, -1);
    const waypoints = newPositions.map((position) => ({
      location: position,
      stopover: true,
    }));

    directionsService
      .route({
        origin: positions[0],
        destination: positions[positions.length - 1],
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: false,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer, positions, routeView]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    // on click waypoints marker
    directionsRenderer.addListener("click", (e) => {
      console.log(e.detail.latLng);
    });
  }, [directionsRenderer, directionsService]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer, positions]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
