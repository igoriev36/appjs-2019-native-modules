package edu.appjs;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNSwingModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNSwingModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNSwing";
  }

  @ReactMethod
  public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
    // TODO: Implement
  }
}