import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 31.8732 + i * 0.01,
      longitude: 76.3195 + i * 0.01,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 31.8732,
        longitude: 76.3195,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
