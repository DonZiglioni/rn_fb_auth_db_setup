import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'expo-image';
import React, { useState, useEffect } from 'react';
import { fb_auth, fb_db } from '../../firebaseConfig';
import { collection, addDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const UserHome = ({ navigation }) => {
    const user = fb_auth.currentUser;
    const [userData, setUserData] = useState({});
    const [userData2, setUserData2] = useState(null);
    const usersRef = collection(fb_db, 'users');

    useEffect(async () => {
        const q = query(usersRef, where("user_id", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            let savedData = {
                username: doc.data().username,
                userId: doc.data().user_id,
                userImg: doc.data().user_img,
            }
            setUserData(savedData);
        });
    }, [])

    //const testFun = async () => {


    // try {
    //     const docRef = await addDoc(collection(fb_db, "users"), {
    //         username: "Alan22",
    //         user_id: "Mathison22",
    //         user_img: "Turing22",
    //     });

    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }
    //}
    return (
        <View style={styles.container}>
            <Text>UserHome</Text>
            <Button title='Open Details' onPress={() => navigation.navigate('Details')} />
            <Button title='Sign Out' onPress={() => fb_auth.signOut()} />
            <Text>{userData.username}</Text>
            <Image source={userData.userImg} style={{ height: 100, width: 100 }}></Image>
            <Text>{userData.userId}</Text>
        </View>
    )
}

export default UserHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})