import react, { Component}  from 'react'
import {
  ScrollView,
    Text
} from 'react-native'
export default class Detail  extends  Component<any, any> {

    render(){
        return (
            <ScrollView>
                 <Text>详情页</Text>
                <Text>尽管信息很少，但这就是详情页</Text>
            </ScrollView>
        )
    }

}
