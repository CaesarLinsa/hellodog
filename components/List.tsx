import react, { Component}  from 'react'
import Detail from './Detail'
import  {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Alert
}  from  'react-native'
export default class List extends Component {
   render() {
      return (
          <ScrollView>
              <Text style={styles.list_item}>☆ 豪华邮轮济州岛3日游</Text>
              <Text style={styles.list_item}>☆ 豪华邮轮台湾3日游</Text>
              <Text style={styles.list_item}>☆ 豪华邮轮地中海8日游</Text>
          </ScrollView>
      )
}

}

const styles = StyleSheet.create({
    list_item: {


    }

})
