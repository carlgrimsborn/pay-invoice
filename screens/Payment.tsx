import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { useOvermindActions } from "../overmind";

const Payment = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState<Camera | null>();
  const navigation = useNavigation();
  const { setPaymentUri } = useOvermindActions();

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
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            const takePicAsync = async () =>
              await camera?.takePictureAsync({
                onPictureSaved: (pic) => {
                  console.log(pic);
                  setPaymentUri({ uri: pic.uri });
                  navigation.navigate("Invoice");
                },
              });
            takePicAsync();
          }}
        >
          <Text style={styles.text}> Scan </Text>
        </TouchableOpacity>
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
  buttonContainer: {
    backgroundColor: "blue",
    borderRadius: 25,
    width: 100,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 20 },
});

export default Payment;
