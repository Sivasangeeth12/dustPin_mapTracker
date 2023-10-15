import React, { Component} from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";
import recordsvalue from "./Realtimedata"
//import logo from "../Assets/dustIcon-removebg-preview.png"
let latitude;
let longitude;

class Googlemap extends Component {
  /*constructor() {
    super();
    this.state = {
      dataLoaded: false, // Add a flag to track data loading
    };
  }
  componentDidMount() {
    // Check if data is already loaded to prevent multiple executions
    if (!this.state.dataLoaded) {
      recordsvalue.map((row, index) => {
        if (row[0] && row[0].lat !== undefined) {
          console.log("Latitude:", row[0].lat);
          console.log("Longitude:", row[0].lng);
          console.log("Bio Capacity:", row[0]["bio-capacity"]);
          console.log("Non-Bio Capacity:", row[0]["non-bio-capacity"]);
          console.log("E-Waste Capacity:", row[0]["e-waste"]);
        } else {
          console.log("Data structure is not as expected.");
        }
      });

      // Set the dataLoaded flag to true to prevent further executions
      this.setState({ dataLoaded: true });
    }
  }*/
  
 /* state = {

    markers: [
      { position: { lat: 10.877184, lng:77.020565 }, title: "Capacity: 2"},
      { position: { lat: 10.902697, lng: 76.998819}, title: "Capacity: 7" },
      // Add more markers as needed
    ],
  };*/
  state = {
    markers: [],
  };

  componentDidMount() {
    // Perform data loading here, or you can use useEffect for data loading as well
    // Make sure to update the "markers" state with the fetched data
    // Example: Fetching data from an API
    fetch("https://bin.firebaseio.com/bin1.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the fetched data
        this.setState({ markers: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  
  renderMarkers() {
    if (!Array.isArray(recordsvalue) || recordsvalue.length === 0) {
      // Check if recordsvalue is not an array or is empty
      return null; // Return nothing if there's no data
    }
    return recordsvalue.map((row, index) => {
      if (row[0] && row[0].lat !== undefined && row[0].lng !== undefined) {
        return (
          <Marker
            key={index}
            position={{ lat: row[0].lat, lng: row[0].lng }}
            title={`Bio-Capacity: ${row[0]["bio-capacity"]} \nNonBio-capacity: ${row[0]["non-bio-capacity"]} \nE-Waste-Capacity: ${row[0]["e-waste"]}`}
            icon={{/*
              url: "https://file.removal.ai/preview/0826e205-8269-4af2-aa55-1b230a29a8fe-mapicon.png",
              scaledSize: new this.props.google.maps.Size(40, 40),https://file.removal.ai/preview/0507ea3c-47e6-4575-8ee1-a06596a6ffb8-png-clipart-recycling-bin-recycling-symbol-green-bin-waste-container-recycle-recycling-waste-thumbnail.png*/
              url:
                  //  row[0]["bio-capacity"] < 90 ||
                  //  row[0]["non-bio-capacity"] < 90 ||
                  //  row[0]["e-waste"] < 90
                   ((row[0]["bio-capacity"]>90) ||(row[0]["non-bio-capacity"]) )
        ?"https://file.removal.ai/preview/8631d127-2115-414f-aa3e-f3e3c3c63703-images.png"
        : "https://file.removal.ai/preview/0507ea3c-47e6-4575-8ee1-a06596a6ffb8-png-clipart-recycling-bin-recycling-symbol-green-bin-waste-container-recycle-recycling-waste-thumbnail.png", // Provide the URL of your other icon
        scaledSize: new this.props.google.maps.Size(30, 30),
            }}
          />
        );
      } else {
        console.log(`Invalid data at index ${index}`);
        return null; // Skip rendering for invalid data
      }
    });
  }
 /* renderMarkers() {
    return this.state.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        title={marker.title}
        icon={{url:"https://cdn-icons-png.flaticon.com/512/5073/5073620.png",scaledSize:new this.props.google.maps.Size(30,30)}}
        />
          
    ));
  }*/
  render() {
    return (
      <div className="map-container w-50 h-50  position-absolute " style={{paddingLeft:"25%"}}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 10.877184, // Latitude of the location you want to center on
            lng: 77.020565, // Longitude of the location you want to center on
          }}
          zoom={14} // Initial zoom level
        >
         {this.renderMarkers()}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAEJKPO1AYMjoiEa7T746tRVtxzf5KhZF8",
})(Googlemap);