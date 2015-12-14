# react-native-braintree-android

A react native interface for integrating Braintree's native Drop-in Payment UI for Android using [Braintree's v.zero SDK](https://developers.braintreepayments.com/start/overview).

<img src="https://cloud.githubusercontent.com/assets/503385/11742042/dc4eeaa8-a037-11e5-80ef-549a5f749282.png" alt="Screenshot" width="300" />

## Setup

1. Add Braintree to your React Native project

```
npm install --save react-native-braintree-android
```

2. Add the following to android/settings.gradle

```java
include ':react-native-braintree'
project(':react-native-braintree').projectDir = new File(settingsDir, '../node_modules/react-native-braintree-android')
```

3. Add the following to android/app/build.gradle

```java
dependencies {
  // ...
  compile project(':react-native-braintree')
}
```

4. Edit android/src/.../MainActivity.java

```java
// ...
import com.surialabs.rn.braintree.BraintreePackage; // <--
import android.content.Intent; // <--

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
    // ...
    private BraintreePackage mBraintreePackage; // <--

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // ...
        mBraintreePackage = new BraintreePackage(this); // <--

        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                // ...
                .addPackage(mBraintreePackage) // <--
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
        // ...
    }

    // ...

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        mBraintreePackage.handleActivityResult(requestCode, resultCode, data);
    }
}
```

## Usage

```js
var Braintree = require('react-native-braintree-android');

var client_token = "eyJ2YXJzbW9uIjoyLC...";

Braintree.paymentRequest(client_token)
      .then((nonce) => /* ... */)
      .catch((error) => /* ... */)
      .done();
```
