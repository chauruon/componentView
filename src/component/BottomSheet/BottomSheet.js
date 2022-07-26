import React, {
    useRef,
    useState,
    useEffect,
    useCallback,
    forwardRef,
    
} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Dimensions,
    Easing,
    
} from 'react-native'
import {
    GestureDetector,
    Gesture,
} from "react-native-gesture-handler"
import Animated,{
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';

const {height,width} = Dimensions.get("window");
const MAX_TRANSLATE_Y = -height + 350;

/**
 * Yêu cầu import GestureHandlerRootView ở Screen trước khi gọi component 
 * import { GestureHandlerRootView } from 'react-native-gesture-handler';
 * <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={[styles.container]}>
                ....
                <BottomSheet 
                    destination={destination}
                    active={active}
                >
                    {children}
                </BottomSheet>
            </View>
    </GestureHandlerRootView>
 * 
 * 
*/


const BottomSheet = forwardRef((props,ref) => {
    const {children,active,destination} = props;
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });
    const scrollTo = useCallback(()=>{
        'worklet';
        translateY.value = withSpring(destination, {damping:50})
    },[destination])
    const gesture = Gesture.Pan()
    .onStart(()=>{
        context.value = { y: translateY.value}
    })
    .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, destination)
    })
    .onEnd(()=>{
        console.log("🚀 ~ file: index.js ~ line 73 ~ .onEnd ~ translateY.value", translateY.value)
        console.log(`xuong ${destination/2 - 2}`);
        if (translateY.value > destination/2) {
            console.log(`kjdhsfkj`,destination - destination);
            scrollTo(destination - destination)
            // translateY.value = withSpring(destination, {damping:50})
        }else if (translateY.value < destination/2 - 2) {
            console.log(`!!!!!!!!!!!!!!!!!!!!`);
            scrollTo(destination)
        }
    });
    const rBottomSheetStyle = useAnimatedStyle(() => {
        // const borderRadius = interpolate(translateY.value,
        //     [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        //     [25, 5],
        //     Extrapolate.CLAMP,
        // )
        return {
            // borderRadius,
            transform:[{translateY: translateY.value}]
        }
    })

    useEffect(() => {
        if (active) {
            scrollTo(destination)
        }
        //  else {
        //     scrollTo(destination)
        // }
    },[active])
    useEffect(() => {
        if (translateY.value > destination/2) {
            scrollTo(0)
        }
        //  else {
        //     scrollTo(destination)
        // }
    },[])
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer,rBottomSheetStyle]}>
                <View style={styles.line}/>
                {children}
            </Animated.View>
        </GestureDetector>
    )
})
export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer:{
        height: height,
        width:"100%",
        backgroundColor:"white",
        position:"absolute",
        top:height,
        borderRadius:15,
        
    },
    line:{
        width:75,
        height:4,
        borderRadius:15,
        backgroundColor:'grey',
        alignSelf:"center",
        marginVertical:15,
    }
});