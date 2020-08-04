import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
          <Button
            title="Details"
            color="green"
              onPress={()=> { 
                navigation.navigate('myDetail', {
                id: 1,
                myParam: "hallo semua",
                name: "Tess",
                })
              }}
          />

          <Button title="Profile" 
          color="green"
          onPress={()=> {navigation.navigate('profile', {
            myID: 2,
            paramProfile: "ini adalah halaman Profile",
            name: "Profile Page"
          })
        }}       
          />
    </View>
  )
}

function DetailScreen({route, navigation}) {
    const{id}=route.params;
    const{myParam}=route.params;
    const{name}=route.params; 
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen: </Text>
      <Text>id: {JSON.stringify(id)}</Text>
      <Text>myParam: {JSON.stringify(myParam)}</Text>
      <Text>name : {JSON.stringify(name)}</Text>
      <Button title="Back" onPress={()=> navigation.goBack()} color='red' />
    </View>
  );
}

function ProfileScreen({route, navigation}) {
  const{myID}=route.params;
  const{paramProfile}=route.params;
  const{name}=route.params;
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen </Text>
      <Text>ID saya: {JSON.stringify(myID)}</Text>
      <Text>My Profile: {JSON.stringify(paramProfile)}</Text>
      <Text style={{marginBottom: 20}}>Page Name: {JSON.stringify(name)}</Text>
      <Button color='black' title='Home' onPress={()=> navigation.navigate('Home')}
      />
      <Button title='Back' color='red' onPress={()=> navigation.goBack()} />
      <Button color='green' title='Back to First Screen' onPress={()=> navigation.popToTop()} />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="myDetail" component={DetailScreen} />
        <Stack.Screen name="profile" component={(ProfileScreen)} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;