import { Animated, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useRef}  from "react";

// menu icons
import  profile  from './assets/profile.jpg';
import  home  from './assets/home.png';
import  search  from './assets/search.png';
import  notifications  from './assets/bell.png';
import  settings  from './assets/settings.png';
import  logout  from './assets/logout.png';

// hambuerguer icons
import  menu  from './assets/menu.png';
import  close  from './assets/close.png';

import photo from './assets/photo.jpg';

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Wanda Maximoff</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50, marginBottom: 35 }}>
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 0,
        borderRadius: showMenu ? 15 : 0,
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
          
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

          <View style={{ flexDirection: "row"}}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,
              
            }}></Image>
              
            <Text style={{
              fontSize: 25,
              marginLeft: 15,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
              paddingTop: 20
            }}>{currentTab}</Text>
          </View>
          </TouchableOpacity>

          <Image source={photo} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 25
          }}></Image>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 15,
            paddingBottom: 5
          }}>Wanda Maximoff</Text>

          <Text style={{
          }}>Wanda Maximoff, also known as the Scarlet Witch, is a Romani Transian sorceress and younger twin sister of the speedster Quicksilver. Once believed to have been mutant children of Magneto. he twins are in truth orphans enhanced by the High Evolutionary at Mount Wundagore. The Scarlet Witch became a conduit of chaos magic, allowing her to shift probabilities and warp reality itself in the form of "hexes". After being saved from an angry mob by Magneto, the Scarlet Witch and her brother joined the Brotherhood of Evil Mutants to fight for Magneto's mutant supremacy cause. Disagreeing with Magneto's ruthless approach, the twins left him and joined the super-heroic Avengers instead.</Text>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// for multiple buttons 
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity onPress={()=>{
      if(title == 'LogOut'){
        // be your color
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 8, 
        backgroundColor: currentTab == title ? 'white' : 'transparent', 
        borderRadius: 8, 
        paddingLeft: 13,
        paddingRight: 30,
        marginTop: 15,
      }}>
        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#ec1d24" : "white"
        }}></Image>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#ec1d24" : "white",
        }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec1d24',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
