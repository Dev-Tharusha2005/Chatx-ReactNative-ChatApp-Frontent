import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native'
import React, { Profiler, useState } from 'react'
import launchImageLibrary from 'react-native-image-picker';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const SignUp = ({navigation}) => {

    const [profilePic, setProfilePic] = useState(null);

    const { sendText, container, headerText, button, buttonText, headerText2, profilePicture, input, formContainer } = styles;



    return (
        <View style={container}>
            <Text style={headerText}>Create new account</Text>

            <TouchableOpacity >
                {profilePic ? (
                    <Image source={{ uri: profilePic }} style={profilePicture} />
                ) : (
                    <Image source={require("./assets/imgPicker.png")} style={profilePicture} />
                )}
            </TouchableOpacity>
            <Text style={headerText2}>Select Image</Text>

            <View style={formContainer}>
                <TextInput style={input} placeholder='Please enter NickName' />
                <TextInput style={input} placeholder='Enter your Email' />
                <TouchableOpacity><Text style={sendText}>Send Code</Text></TouchableOpacity>
                <TextInput style={input} placeholder='Enter Verification Code' />
            </View>


            <TouchableOpacity style={button} onPress={() => navigation.navigate("Home")}>
                <Text style={buttonText}>Create an Account</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8ecf4',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 30,
        color: "#213241",
        textAlign: "center",
    },
    button: {
        width: "100%",
        backgroundColor: "#0573F3",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
    },
    headerText2: {
        fontSize: 20,
        color: "#213241",
    },
    profilePicture: {
        width: 100,
        height: 100,
    },
    input: {
        width: "100%",
        height: 50,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#0573F3",
        borderRadius: 10,
        rowGap: 10,
        paddingStart: 10
    },
    formContainer: {
        width: "100%",
        rowGap: 20,
        paddingTop: 30,
        paddingBottom: 20
    },
    sendText: {
        color: "#0573F3",
    }
});


export default SignUp