# nc-react-native

Nucamp Coding Bootcamp React Native Course Project

## Learning Objects

- Installing and setting up Reactive Native Environment
- Build a Front End Mobile Application for ios and Android Devices

## Tools & Installations

- Expo CLI
- React Native
- React Native Elements
- Android Emulator

### Updates:

#### 10/31/22:

- Android Emulate installed
- App.js File Return Main Componenet
- Campsite.js File create to hold CAMPSITES objects
- DirectoryScreen.js -> looping over each CAMPSITES objects and using ListItem Elements to display each CAMPSITES item. Returned as FlatList component

#### 11/1/22:

- RenderCampsite.js debbugging resolved. Import View and Text components from react-native instead of react-native-elemnts.
- Props.campsite.image spelling syntax corrected. Image for each campsite pressed now displaying.

#### 11/2/22:

- React Native Navigation Library added to dispay each campsite feature once onPress activate in the campsite Directory.
- Debugging: Campsite useState object syntax error corrected in RenderCampsite.js file

#### 11/2/22: 1:00pm

- React Navigation Drawer Installed
- HomeScreen.js file created and import to MainComponent.js file/
- <Stack.Navigator> component used to create Side Draw menu. Nesting two <Stack.screen> componenets to creat side draw menu options for Home & Directory page.

#### 11/2/22: 1:55pm

- Data filse Downloaded and Created: promotions.js,comments.js,partners.js
- HomeScreen.js Update: <View> component replaced with <ScrollView> component since we have a set small number of items to render on screen.
  -HomeScreen.js: FeaturedItem anonymous function const created to pass each Data file as a prop and render on HomeScreen. Only object items with bolean value of true in feature property will be rendered (done by using filter method on each state of each sets of data)

#### 11/5/22:

- AboutScreen.js & ContactScreen.js files create and added to Main Componenet Stack Navigator
  - Both files have <ScrollView> added as the container Component.
- AboutScreen.js:
  - imported PARTNERS data, and mapped over data to display on contact us screen.
  - Created Separate functional component called <Mission> to return a <Card> Component that contains the mission statement content
  - <Mission> Component nested insited the <Scrollview> parent container, as well as the
- ContactScreen.js:
  - <Card> componenet used to render and layout contact information.
