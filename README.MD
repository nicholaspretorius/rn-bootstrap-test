### React Native with TypeScript and Detox

Example of bootstrapping a React Native app in 2020. Inspired by: 

1. [William Candillon](https://www.youtube.com/watch?v=mqO9EGvt-kU)
2. [Joshua Justice](https://blog.expo.io/testing-expo-apps-with-detox-and-react-native-testing-library-7fbdbb82ac87)

#### Concept

Idea is to have a React Native app running with TypeScrip and unit tests with Jest, React Native Testing Library and e2e tests with Detox. 

* yarn install
* expo start
* Install Expo Client app from iOS App Store.
* Select "Tunnel" in Expo client


#### Detox and Tests

In order for Detox to run, you need to navigate to the [Expo Tools](https://expo.io/tools#client) page. If you scroll down there is a small link to download the IPA package for the iOS Expo Client. Download this, extract the folder, then change the name of the folder to Exponent.app. From there, create a bin folder in your project root and place the Exponent.app folder within the bin. 

Bin is excluded from the repo since it is quite large and contains many files. Once this is done, you can run the Detox tests. 

* Run Detox tests: `detox test`
* Run tests: `yarn test`

