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

4. Edit android/src/.../MainApplication.java

```java
// ...
import com.surialabs.rn.braintree.BraintreePackage; // <--
import android.content.Intent; // <--

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
					new BraintreePackage()
      );
    }

  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
```

## Usage

```js

import Braintree from 'react-native-braintree-android';

class Payment extends Component {
  ...

  componentDidMount() {
    Braintree.setup(CLIENT_TOKEN)
  }

  _paymentInit() {
    Braintree.showPaymentViewController().then((nonce) => {
      // Do something with nonce
    });
  }

  ...
}

```
