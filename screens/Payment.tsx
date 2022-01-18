import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { useOvermindActions } from "../overmind";
import { documentScanLibResponse } from "../mockData";
import { Primary } from "../Colors";
import BasicButton from "../components/BasicButton";

const Payment = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState<Camera | null>();
  const navigation = useNavigation();
  const { setPayment } = useOvermindActions();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type="back"
        ref={(ref) => {
          setCamera(ref);
        }}
      >
        <BasicButton
          title="Scan"
          onPress={() => {
            const takePicAsync = async () =>
              await camera?.takePictureAsync({
                onPictureSaved: (pic) => {
                  const response = documentScanLibResponse();
                  setPayment({
                    uri: pic.uri,
                    amount: response.amount,
                    due_date: response.due_date,
                    receiver: response.receiver,
                  });
                  navigation.navigate("Invoice");
                },
              });
            takePicAsync();
          }}
        ></BasicButton>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    alignItems: "center",
  },
});

export default Payment;
