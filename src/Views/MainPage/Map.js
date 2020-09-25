import React, { useEffect } from "react";

//Props: containerId: id for the container of the map
function MainMap(props) {
  const id = props.containerId;

  useEffect(() => {
    /*global L*/
    const mymap = L.map(id).setView([51.505, -0.09], 13);

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
  }, []);

  return <> </>;
}

export default MainMap;
