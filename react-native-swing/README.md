# react-native-swing

## Getting started

`$ npm install react-native-swing --save`

### Mostly automatic installation

`$ react-native link react-native-swing`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-swing` and add `RNSwing.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSwing.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import edu.appjs.RNSwingPackage;` to the imports at the top of the file
  - Add `new RNSwingPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-swing'
  	project(':react-native-swing').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-swing/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-swing')
  	```


## Usage
```javascript
import RNSwing from 'react-native-swing';

// TODO: What to do with the module?
RNSwing;
```
  