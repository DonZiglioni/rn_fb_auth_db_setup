import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { fb_auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = fb_auth;

    const logIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            console.log("USER: : : ", response.user);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            console.log("USER: : : ", response.user);
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    return (

        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                value={email}
                style={styles.input}
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
                autoCapitalize='none'
            />
            <TextInput
                value={password}
                style={styles.input}
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                autoCapitalize='none'
                secureTextEntry={true}
            />
            {
                loading ?
                    <ActivityIndicator size='large' color='000FF' />
                    :
                    <>
                        <TouchableOpacity style={styles.btn} onPress={logIn} >
                            <Text style={styles.btnTxt}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={signUp} >
                            <Text style={styles.btnTxt}>SIGN UP</Text>
                        </TouchableOpacity>


                    </>
            }
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginVertical: 10,
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#DDDDDD'
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'rgba(0,255,0,.5)',
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
    },
    btnTxt: {
        fontSize: 18,
    }
})