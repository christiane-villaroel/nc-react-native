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

#### 11/6/22:

- Comments data added as comment section in <CampsiteInfoScreen> using <FlatList> to render each item in the COMMENTS object.
  - Using .filter() in the data attritbute, of the <FlatList> component, to display only the comment items who's ID match the campsite ID.
- <Icon> using the icon component provided by react native I added the font-awesone heart on each Campsite in the <RenderCampsite> screen. Setting Local state to keep track of when a user touches the heart icon to mark as their favorite, changing the state from a false to a true bolean value

### 11/7/22:

-<MainComponent> file update to Nucamp header with logo, usiing a <CustomDrawerContent> function component.

- In the component I used the <DrawContentScrollView> as the contaiernt to render the name of the app (NuCamp) and the logo

### 11/9/22:

- Set Up react Redux packages:
  - Installed: redux@4.1.2 react-redux@7.2.6 @reduxjs/toolkit@1.7.2
  - created redux folder and store.js file
  - <baseUrl> file to holde http ip address and port.
  - made slice files to hold reducer functions for the following features:
    - Partners
    - Comments
    - Campsites
    - Promotions
      - For Each file I copied the code given to me from the nucamp coding bootcamp course.

### 11/9/22:

- Activity Indicator:
  - Created loading Screen component to load when app is waiting for fetch request to be fullfilled
    - if fullfilled and reject then err message will be rendered
    - if fullfulled then data from json-server will be rendered on screen accordingly
    - Redux used to store data and useSelector used to maintain state for campsites, promotions and partners data.

# Issues:

## Expo Go Update Issue-

- I was running this application on the expo go app however as of 11/5/22 there was a new update that no longer supports expo sdk version below 45. With the help of instructors and fellow classmates I was able to update sdk to 45 and react native animate to 3.4.2. However; this did not resolve the issue of rendering the nucampsite app on expo go. Now I am running this app on android studio emulator using the pixel 5 emulator to view this application.
- still un able to view this aplication on expo go
