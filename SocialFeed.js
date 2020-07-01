import React from 'react'

// Import react-native components
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'

// Import react-native-svg
// from 'https://github.com/react-native-community/react-native-svg'

// Import react-native-size-matters
// from 'https://github.com/nirsky/react-native-size-matters'

// Props info list
// 1. mine (bool) => renders blue bubble on right
// 2. text (string) => renders text message
// 3. image (image file) => renders image inside bubble

// Declare component 
class MessageBubble extends React.Component {
  render(){
    return (
        <View style={{flex:1}}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20,marginVertical: 16, color: '#fff'}}>Leaderboard</Text>
            </View>
        </View>
    )
  }
}

export default MessageBubble

const styles = StyleSheet.create({
  

})