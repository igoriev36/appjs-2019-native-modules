import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from "react-native";
import { FileSystem } from "expo";

// import MessageQueue from "react-native/Libraries/BatchedBridge/MessageQueue.js";

// write a spyFunction that will log the argument
// if you have a small terminal, try logging values for type, method and module keys
// (the argument will be an object)

export default class App extends React.Component {
  handleListNativeModulesPress = async () => {
    // In Expo you can use a module named
    // ExpoNativeModuleIntrospection
    // to inspect what native modules are available.
    // `getNativeModuleNamesAsync` method is an asynchronous method
    // resolving with a list of modules names
  };

  handleGetInfoPress = async () => {
    // Before executing FileSystem.getInfoAsync method
    // try setting a spy on MessageQueue
    // To set a spy, use a static method MessageQueue.spy
    // => MessageQueue.spy(func) would set func as the spy.



    // Clear the spy once getInfoAsync resolves not to flood
    // the terminal with uninteresting logs
    // or try stripping out logs of calls to
    // Networking, RCTDeviceEventEmitter and null modules.
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleListNativeModulesPress}
        >
          <Text style={styles.buttonText}>Tap to log native modules' names</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleGetInfoPress}
        >
          <Text style={styles.buttonText}>
            Tap to execute FileSystem.getInfoAsync
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-evenly"
  },
  button: {
    maxWidth: 300,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#343148"
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "700",
    textAlign: "center"
  }
});
