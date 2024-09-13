import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


import './App.css';

const App = () => {
  const [bullBalance, setBullBalance] = useState(100); // Default balance

  // Optionally use localStorage to persist balance
  useEffect(() => {
    const storedBalance = localStorage.getItem('bullBalance');
    if (storedBalance) {
      setBullBalance(parseInt(storedBalance));
    }
  }, []);

  const updateBalance = (newBalance) => {
    setBullBalance(newBalance);
    localStorage.setItem('bullBalance', newBalance);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <View style={styles.center}>
          <View style={styles.logoContainer}>
            <Image source={{uri: './assets/WhatsApp Image 2024-09-04 at 10.27.58_6e51e334.jpg'}} style={styles.logo} />
            <Text style={styles.logoText}>BULL</Text>
          </View>

          <View style={styles.coinsContainer}>
            <Text style={styles.coins}>50 000</Text>
          </View>

          <View style={styles.toggleContainer}>
            <TouchableOpacity style={styles.toggleButtonActive}>
              <Text style={styles.toggleText}>Singleplayer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toggleButtonInactive}>
              <Text style={styles.toggleText}>Multiplayer</Text>
              <Text style={styles.soon}>soon</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Eye of God</Text>
            <Image source={{uri: 'link_to_eye_icon'}} style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Memory Booster</Text>
            <Image source={{uri: 'link_to_memory_icon'}} style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Branny Paw</Text>
            <Image source={{uri: 'link_to_paw_icon'}} style={styles.menuIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.comingSoon}>
            <Text style={styles.comingSoonText}>Coming Soon</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomMenu}>
          <TouchableOpacity><Text style={styles.bottomMenuText}>👤</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bottomMenuText}>⚡</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bottomMenuText}>⭕</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bottomMenuText}>🏆</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.bottomMenuText}>👤</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    color: '#fff',
    fontSize: 18,
  },
  telegramIcon: {
    width: 30,
    height: 30,
  },
  battery: {
    color: '#fff',
    fontSize: 18,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  close: {
    color: '#1E90FF',
    fontSize: 16,
  },
  miniApp: {
    color: '#aaa',
    fontSize: 16,
  },
  center: {
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  coinsContainer: {
    backgroundColor: '#800000',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  coins: {
    color: '#fff',
    fontSize: 30,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  toggleButtonActive: {
    backgroundColor: '#800000',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  toggleButtonInactive: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    color: '#fff',
    fontSize: 16,
  },
  soon: {
    color: '#ff4500',
    fontSize: 14,
    marginLeft: 5,
  },
  menu: {
    marginVertical: 20,
  },
  menuItem: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  comingSoon: {
    backgroundColor: '#800000',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  comingSoonText: {
    color: '#fff',
    fontSize: 18,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#111',
    paddingVertical: 10,
  },
  bottomMenuText: {
    color: '#fff',
    fontSize: 18,
  },
});