import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
} from 'react-native'
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get("window");

export const listView = [
    {
        id:1,
        name:"Checkbox",
        nameNavigate:"CheckboxScreen",
        icon: require("../assets/rocketIcons.gif")
    },
    {
        id:2,
        name:"InputFlatlist",
        nameNavigate:"InputFlatlistScreen",
        icon: require("../assets/rocketIcons.gif")
    },
    {
        id:3,
        name:"InputFlatlistFormik",
        nameNavigate:"InputFomik",
        icon: require("../assets/rocketIcons.gif")
    },
    {
        id:4,
        name:"FlexComponent",
        nameNavigate:"FlexComponent",
        icon: require("../assets/rocketIcons.gif")
    },
    {
        id:5,
        name:"BottomSheet",
        nameNavigate:"BottomSheet",
        icon: require("../assets/rocketIcons.gif")
    },
    {
        id:6,
        name:"OrtherBottomSheet",
        nameNavigate:"OrtherBottomSheet",
        icon: require("../assets/rocketIcons.gif")
    },
    {
        id:7,
        name:"Map View",
        nameNavigate:"MapView",
        icon: require("../assets/rocketIcons.gif")
    },
]

export const HomeScreen = ({navigation}) => {
    const onpressHandle = (nameNavigate) => { 
        navigation.navigate(nameNavigate)
    }
    const handleOnpress = () => { 
        navigation.navigate("CheckboxScreen")
    }
    const handleOnpressInputFlatlistScreen = () => { 
        navigation.navigate("InputFlatlistScreen")
    }
    const InputFlatlistFormik = () => {
        navigation.navigate("InputFomik")
    }
    const demo = () => {
        navigation.navigate("FlexComponent")
    }
    const BottomSheet = () =>{
        navigation.navigate("BottomSheet");
    }
    const OrtherBottomSheet = () =>{
        navigation.navigate("OrtherBottomSheet");
    }
    return (
        <View style={{
            flex: 1,
            justifyContent:"center",
            alignItems:"center",
        }}>
            {/* <ScrollView>
                <TouchableOpacity style={styles.btnCheckbox} onPress={handleOnpress}>
                    <Text style={styles.text}>Checkbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckbox} onPress={handleOnpressInputFlatlistScreen}>
                    <Text style={styles.text}>InputFlatlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckbox} onPress={InputFlatlistFormik}>
                    <Text style={styles.text}>InputFlatlistFormik</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckbox} onPress={demo}>
                    <Text style={styles.text}>T</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckbox} onPress={BottomSheet}>
                    <Text style={styles.text}>Bottom Sheet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCheckbox} onPress={OrtherBottomSheet}>
                    <Text style={styles.text}>OrtherBottomSheet</Text>
                </TouchableOpacity>
                
            </ScrollView> */}
            <View style={
                {
                    marginBottom:20,
                    backgroundColor:"#071f13"
                }
            }>
                <FastImage source={require("../assets/reactNative.gif")} style={styles.imageLogo} />
            </View>
            <FlatList 
                data={listView}
                keyExtractor={item=>item.id}
                numColumns={2}
                renderItem={({item}) => {
                    return(
                        <View style={{
                            width:width/2 -30,
                            height:100,
                            marginBottom:10,
                            marginHorizontal:10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
                        }}>
                            <TouchableOpacity style={
                                {
                                    borderRadius:16,
                                    height:"100%",
                                    // marginBottom:5,
                                    justifyContent:"center",
                                    alignItems:"center",
                                }
                            } onPress={() => onpressHandle(item.nameNavigate)}>
                                <FastImage style={
                                    {
                                        height:50,
                                        width:50,
                                    }
                                } source={item.icon}/>
                                <Text style={
                                    {
                                        color:"Black",
                                        fontSize:17,
                                        fontWeight:"bold",
                                    }
                                }>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btnCheckbox:{
        backgroundColor:"#1273de",
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        borderRadius: 8
    },
    imageLogo:{
        height:210,
        width:width,
    },
    text:{
        marginHorizontal:10,
        color:"white",
        fontSize:15,
        fontWeight:"bold",
    },
})