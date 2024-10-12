import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainNav from './MainNav'; // Assuming MainNav contains your app's navigation logic and screens
import { HostelProvider } from '../Screens/HostelContext';
import SemesterOffer from '../Screens/SemesterOffer';

export default function index() {
  return (
    <HostelProvider>
        <View style={styles.main}>
            <SemesterOffer/>
        </View>
    </HostelProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
