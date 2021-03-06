import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MyContacts from './screens/MyContacts';
import CreateContact from './screens/CreateContact';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="G2 Academy">
        <Stack.Screen name="G2 Academy" component={MyContacts} />
        <Stack.Screen name="CreateContact" component={CreateContact} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, {Component, PureComponent} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   SectionList,
//   TouchableOpacity,
// } from 'react-native';

// import SectionListModule from 'react-native-sectionlist-contacts';

// type Props = {};
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);

//     //name字段必须,其他可有可无
//     let nameData = [
//       {name: '阿玛尼', id: 'amani', params: ''},
//       {name: 'OK', id: 'ok', params: '123'},
//       {name: 'Aku'},
//       {name: '%……&'},
//       {name: 'Bagas'},
//       {name: '习大表哥'},
//       {name: '不要这样'},
//       {name: 'V字仇杀队'},
//       {name: '拼车'},
//       {name: '他妈跌'},
//       {name: '淫僧'},
//       {name: '钱学森'},
//       {name: '宁采臣'},
//       {name: '史泰龙'},
//       {name: '恐龙'},
//       {name: '任达华'},
//       {name: '妈咪宝贝'},
//       {name: 'ing'},
//       {name: '康麦隆'},
//       {name: '刘德华'},
//       {name: '精忠报国'},
//       {name: '黄药师'},
//       {name: '大叔皮'},
//       {name: '布达拉宫'},
//       {name: '方世玉'},
//       {name: 'ET外星人'},
//       {name: '程咬金'},
//       {name: '**&&&&'},
//     ];

//     this.state = {
//       dataArray: nameData,
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionListModule
//           ref={s => (this.sectionList = s)}
//           sectionListData={this.state.dataArray}
//           sectionHeight={50}
//           initialNumToRender={this.state.dataArray.length}
//           showsVerticalScrollIndicator={false}
//           SectionListClickCallback={(item, index, section) => {
//             console.log('---SectionListClickCallback--:', item, index);
//           }}
//           otherAlphabet="#"
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// });
