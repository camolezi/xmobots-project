import React, { useEffect, useState } from "react";

//Utility
import { ParseDMS, ConvertDMSToDD } from "../../Utility/AirportParse.js";

//Store
import { useSelector } from "react-redux";
import { selectAllAirports } from "../../Store/Slices/airportSlice";

//Props: containerId: id for the container of the map
function MainMap(props) {
  const airports = useSelector(selectAllAirports);
  const id = props.containerId;

  const [map, setMap] = useState(null);

  useEffect(() => {
    /*global L*/
    const mymap = L.map(id).setView([-22.002917, -47.89875], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiY2Ftb2xlemkiLCJhIjoiY2tmaG5xdnptMDZ2cDJ4bGRodjRteWsxbSJ9.M97VIuz7PtgpErxwqAX7QQ",
      }
    ).addTo(mymap);

    setMap(mymap);
  }, []);

  useEffect(() => {
    if (!map) return;
    if (!airports) return;

    let allPositions = [];

    //forEach airport in the store, crates a marker and a cicle on the provided location
    airports.forEach((airport) => {
      const airportCoord = ConvertDMSToDD(ParseDMS(airport.description));

      if (!airportCoord) return;

      allPositions.push(airportCoord);
      const marker = L.marker(airportCoord, {
        title: airport.name,
      })
        .on("click", (e) => {
          map.flyTo(e.target.getLatLng(), 13);
        })
        .addTo(map);

      L.circle(airportCoord, {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 5000,
        stroke: false,
      }).addTo(map);

      marker.bindPopup(L.popup().setContent(airport.name));
    });

    map.flyToBounds(allPositions);
  }, [airports]);

  return <> </>;
}

export default MainMap;
