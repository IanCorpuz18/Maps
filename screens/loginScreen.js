
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ImageBackground,

} from 'react-native';

import validate from './utility/validation'
import background from '../assets/images/assets/fbg.png'
import Icons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right } from 'native-base';
import ShowPass from '../assets/components/showPass';
import CustomIcon from '../assets/components/CustomIcon';
import CustomInput from '../assets/components/customInput';
import ImageSlider from 'react-native-image-slider'
class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        // email: "",
        // pass: "",
        // cPass:"",
       
        access: false,
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: 'password'
                },
                touched: false
            }
        }
    }

    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === 'password') {

            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: prevState.controls.confirmPassword,
                    valid: key === "password" ? validate(prevState.controls.confirmPassword.value,
                        prevState.controls.confirmPassword.validationRules, connectedValue)
                        : prevState.controls.confirmPassword.valid,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                        touched:true
                    }
                }
            }
        })
    }


    logIn = () => {
        // if (this.state.email ==="" && this.state.pass === "" && this.state.cPass === "") {
        //     this.setState({access: !this.state.access})
        //     // this.setState({disable: !this.state.disable})

        // }

        // else if (this.state.email === '' && this.state.pass===""){
        //     alert('Please enter your email & password.')
        // }
        // else if (this.state.pass === '' && this.state.cPass===""){
        //     alert('Please enter your password & confirm it.')
        // }
        // else if (this.state.email === '' && this.state.cPass===""){
        //     alert('Please enter your email & re-enter password.')
        // }
        // else if (this.state.email === '') {
        //     alert('Please enter your email.')
        // }
        // else if (this.state.pass === '') {
        //     alert('Please enter your password.')
        // }
        // else if (this.state.cPass === ""){
        //     alert('Please re-enter your password.')
        // }
        // else {
        //     this.setState({
        //         email: "",
        //         pass: "",
        //         cPass:""
        //     });
        this.props.navigation.navigate('Explore')

        // }

    }
    render() {
        return (
            <ImageBackground source={background} style={{ width: "100%", height: "100%" }}>

                <Header style={{ backgroundColor: "transparent" }}>
                    <Left style={{ marginLeft: "-40%" }}>
                        <Icons name='ios-arrow-back' size={30} color={"white"} style={{ paddingRight: 50 }}
                            onPress={() => this.props.navigation.goBack()} />
                    </Left>
                </Header>

                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Login
        </Text>
                    <Text></Text>
                    <Text style={{ color: "white", marginLeft: "10%" }}>Email </Text>
                    <CustomInput style={{ color: "white" }} onChangeText={(val) => this.updateInputState('email', val)}
                        value={this.state.controls.email.value} 
                        valid={this.state.controls.email.valid}
                        touched={this.state.controls.email.touched}/>
                    <Text> </Text>
                    <Text style={{ color: "white", marginLeft: "10%" }}>Password</Text>
                    <ShowPass onChangeText={(val) => this.updateInputState('password', val)}
                        value={this.state.controls.password.value}
                        valid={this.state.controls.password.valid }
                        touched={this.state.controls.password.touched}/>
                    <Text> </Text>
                    <ShowPass onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                        value={this.state.controls.confirmPassword.value}
                        valid={this.state.controls.confirmPassword.valid}
                        touched={this.state.controls.confirmPassword.touched}  />
                    <Text></Text>
                    <CustomIcon disabled={this.state.controls.email.valid 
                    && this.state.controls.password.valid 
                    && this.state.controls.confirmPassword.valid
                    } onPress={this.logIn}
                  />

                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#00A795',
    },
    welcome: {
        fontSize: 30,
        // textAlign: 'center',
        margin: 10,
        color: "white",
        marginLeft: "10%"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default LoginScreen;