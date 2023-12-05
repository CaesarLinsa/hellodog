import react, { Component}  from 'react'
import  {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Animated,
    Button
}  from  'react-native'
export default class List extends Component {
   marginTop = new Animated.Value(20)
   animate = () => {
    Animated.timing(
    this.marginTop,
    {
      toValue: 200,
      duration: 500,
      useNativeDriver: false
    }
    ).start()
   }
   render() {
      return (
          <ScrollView>
            <Button title='animate btn' onPress={this.animate}/>
            <Animated.View style={[styles.box,  {marginTop: this.marginTop}]}/>
          </ScrollView>
      )
}

}

const styles = StyleSheet.create({
    box: {
       width:150,
       height: 150,
       backgroundColor: 'red'

    }

})
