// import "../_mockLocation";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import * as Permissions from "expo-permissions";
import { watchPositionAsync, Accuracy } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await Permissions.askAsync(Permissions.LOCATION);
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {}
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
