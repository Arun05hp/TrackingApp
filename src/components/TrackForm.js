import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
        {!recording && locations.length ? (
          <Spacer>
            <Button title="Save Recording" />
          </Spacer>
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
