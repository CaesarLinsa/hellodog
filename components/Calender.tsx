import react, { Component}  from 'react'
import {LocaleConfig, Calendar} from 'react-native-calendars'
import  {
    View,
    ScrollView,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
}  from  'react-native'

// 日历组件 中文替换
LocaleConfig.locales['fr'] =
    {
        monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六']
    }
LocaleConfig.defaultLocale = 'fr'

// 日历组件 标记点的颜色
const vacation = {key: 'vacation', color: '#33D9B5', selectedDotColor: '#33D9B5'}

export default class Calender extends Component {

    //默认模态视图不可见
    state = {
        modalVisible: false,
        select_day: ''
    };

    //修改模态视图可见性
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <Modal  animationType={"slide"} transparent={false} visible={this.state.modalVisible}>
                        <View style={{flex:3, flexDirection:'row',borderWidth:1, justifyContent:'flex-end',borderColor:'red'}}>
                            <TouchableHighlight onPress={() => { this.setModalVisible(false)}}>
                                <Text style={{fontSize:20,color:'red'}}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                </View>

                <Calendar
                    onDayPress={day => {
                        this.setModalVisible(true)
                        console.log('hello')
                    }}
                  markedDates={{
                            '2023-12-15': {marked: true, dotColor: '#50cebb'},
                            '2023-12-16': {marked: true, dotColor: '#50cebb'},
                            '2023-12-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                            '2023-12-22': {color: '#70d7c7', textColor: 'white'},
                            '2023-12-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                            '2023-12-24': {color: '#70d7c7', textColor: 'white'},
                            '2023-12-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
                            }}
                    markedDates={{
                        [this.state.select_day]: {selected: true, disableTouchEvent: true}
                    }}
                    monthFormat={'yyyy年MM月'}
                    dayComponent={
                        ({date, state}) => {
                            return (
                                    <View>
                                        <TouchableOpacity onPress={()=> {console.log('day' + date.day + typeof(date.day))}}>
                                            <Text style={{textAlign: 'left', color: state === 'disabled' ? 'gray' : 'black'}}>
                                            {date.day}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                        }
                    }
                />

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    list_item: {


    }

})
