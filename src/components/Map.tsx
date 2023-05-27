import { GoogleMap, useJsApiLoader, Polygon } from "@react-google-maps/api";

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyD_mt4bpelB7Dlr7XzfUW9k7b9agbf_iSo"
    });
    const mapOptions = {
        // Set the initial center of the map
        center: { lat: 34.0209, lng: -6.8416 },
        // Set the initial zoom level
        zoom: 12,
    };
    if (!isLoaded)
        return <div className="map-container">loading</div>
    else
        return <GoogleMap mapContainerClassName="map-container" options={{...mapOptions}}>
        </GoogleMap >
}

export default Map;