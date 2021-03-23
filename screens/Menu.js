import { Assets } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Menu = props => {
   const dispatch = useDispatch();
   const happy = useSelector(state => state.chat.happy);    
   console.log("Are you happy? " + happy);

   const chatrooms = useSelector(state => state.chat.chatrooms); // selecting from redux store


   const onHappyHandler = () => {
       dispatch(toggleHappy());
   };

   return (
      <View style={styles.container}>
        
          <Image style={styles.tinyLogo} source={require('./../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png')} />

          <Text>Robert Jacobsen</Text>
        
        
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   tinyLogo: {
      width: 50,
      height: 50,
   },
});

export default Menu;