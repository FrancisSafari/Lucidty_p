import { View, Text, StyleSheet , TouchableOpacity , ScrollView } from 'react-native';
import React from 'react';
import SessionsCarousel from '../components/SessionsCarousel.js';
import ButtonDiv from '../components/ButtonDiv.js' ; 
const Header = ({ userName = 'Username', greeting = 'Good Morning!' }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{userName.charAt(0)}</Text>
          <View style={styles.onlineIndicator} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>{greeting}</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.settingsButton}>
        <View style={styles.settingsIcon}>
          <View style={styles.gear} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function Dashboard({ navigation, route }) {
  const { email } = route.params;
  const { first_name } = route.params;
  const { last_name } = route.params;
  
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header userName={first_name} />
      <View style={styles.textContainer}>
        <Text style={styles.sessionText}>
          Sessions
        </Text>
      </View>
      <View style={styles.CarouselContainer}>
        <SessionsCarousel />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.sessionText}>
          Details
        </Text>
      </View>
      <View style={styles.buttonDiv}>
        <ButtonDiv /> 
        <ButtonDiv /> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#131313',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  emailText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  // Header Styles
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#131313',
    paddingTop: 50, // Adjust for status bar
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00C6AE',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#131313',
  },
  textContainer: {
    marginLeft: 12,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 16,
    opacity: 0.9,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gear: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  CarouselContainer: { 
    paddingVertical : 16 , 
  },
  sessionText : {
    color : 'white' , 
    fontSize : 20 , 
    fontWeight : 'bold' , 
    marginBottom : 12 , 
  },
  textContainer : {
    marginVertical : 8, 
    paddingHorizontal : 16 , 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18 ,
    fontWeight: '600',
    paddingBottom : 4 , 
  },
  badge : {
    flex : 1 , 
    flexDirection : 'row' , 
    gap : 4 , 
    justifyContent : 'center' , 
    alignItems : 'center' , 
  }, 
  buttonDiv : {
    flex : 1 , 
    flexDirection : 'column' , 
    gap : 8 ,
  },
});
