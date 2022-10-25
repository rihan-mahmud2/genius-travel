import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 21.4272,
      lng: 92.0058,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "90vh", width: "90%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps?.center}
        defaultZoom={defaultProps?.zoom}
      >
        <AnyReactComponent lat={21.4272} lng={92.0058} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
