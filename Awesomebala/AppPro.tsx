import React from "react";

import { 
        View,
        Text, 
        StyleSheet,
        useColorScheme,
        ImageBackground
      // SafeAreaView
    } from 'react-native'

function AppPro(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText } >
              hello World!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText:{
    color:'white',
    borderColor: 'white',
    padding: 10,
    fontSize:20,
  },
  darkText:{
    color:'black',
    borderColor: 'black',
    borderRadius: 100,
    backgroundColor: 'gold',
    padding: 10,
    fontSize:20,
  },
  // ImageBackground:URL('./')
    
  
})

export default AppPro