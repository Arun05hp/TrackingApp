import { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (callback) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await Permissions.askAsync(Permissions.LOCATION);
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
  return [err];
};
