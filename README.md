# [App.js](https://appjs.co) 2019 workshop

## “Extending JS capabilities with native code” by [Stanisław Chmiela](https://github.com/sjchmiela)

This repository contains:

- a simple Expo application `message-queue` presenting:
  - the ability to see a list of available native modules (only in [Expo](https://expo.io/)!)
  - the ability to spy on messages being passed through the native-JS bridge ([“Debugging React Native Performance: Snoopy and the MessageQueue”](https://medium.com/@jondot/debugging-react-native-performance-snoopy-and-the-messagequeue-fe014cd047ac), [“React Native — How to check what passes through your bridge?”](https://blog.callstack.io/reactnative-how-to-check-what-passes-through-your-bridge-e435571ffd85))
- a React Native library project `react-native-swing` (_cause you gonna be swinging from one side of the bridge to the other_):
  1. created using [`react-native-create-library`](https://github.com/frostney/react-native-create-library) from commit [`e08c03c`](https://github.com/frostney/react-native-create-library/tree/e08c03cadf417a9fcf6a1daba0193ea58959469e) with the following command
      ```
      react-native-create-library --package-identifier edu.appjs --platforms ios,android --generate-example Swing
      ```
  2. added small comments in `example/App.js` on how to start debugging the library using example app
  3. applied changes to the project according to [“Setting up an Example App for Your React Native Library”](https://medium.com/@charpeni/setting-up-an-example-app-for-your-react-native-library-d940c5cf31e4) so that modifying native code inside `example` project actually modifies the library code.
