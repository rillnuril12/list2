import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Account = () => {
    const [nip, setNip] = useState('')
    const [nama, setNama] = useState('')
    const [passwordLama, setPasswordLama] = useState('')
    const [passwordBaru, setPasswordBaru] = useState('')
    const [konfirmasiSandi, setKonfirmasiSandi] = useState("");

    const [data, setData] = useState({
        nip: '',
        password: '',
        nama: ''
    })

    console.log('nip', data.nip)
    console.log('password', data.password);
    console.log('nama', data.nama);

    useEffect(() => {
        getData()
        return () => { };
    }, []);

    const getData = async () => {
        try {
            let nip = await AsyncStorage.getItem('nip')
            let password = await AsyncStorage.getItem('password')
            let name = await AsyncStorage.getItem('name')
            if (nip !== null) {
                // value previously stored
                setData({
                    nip: nip,
                    nama: name,
                    password: password,
                    name: name
                })
            }
        } catch (e) {
            // error reading value
        }
    }

    const resetPassword = async (value) => {
        console.log('value', value);
        try {
            const response = await axios.put('http://192.168.1.28:3300/user', {
                nip: value.nip,
                password: value.passwordLama,
                passwordBaru: value.passwordBaru,
            })
            if (response.data.status == 200) {
                console.log('response', response)
                ToastAndroid.show("Password berhasil diubah", ToastAndroid.SHORT)
            }
        } catch (error) {
            console.log(error.message)
            ToastAndroid.show("Cek kembali nip dan password", ToastAndroid.SHORT)
        }
    }

    return (
        <View style={{backgroundColor:'white',height:800}}>
            <Text style={{color:'black',top:20,fontFamily:'times new roman',fontSize:25,fontWeight:'bold',textAlign:'center',backgroundColor:'white'}}>My Account</Text>
            <Text style={{color:'black',top:40,fontFamily:'times new roman',fontSize:25,fontWeight:'bold',textAlign:'center',backgroundColor:'white',width:100,height:110,left:10}}></Text>
            <Text style={{color:'black',bottom:25,width:250,left:120,borderRadius:5}}>NIP: {data.nip}</Text>
            <Text style={{color:'black',bottom:25,width:250,left:120,borderRadius:5}}>Nama: {data.nama}</Text>
            <Text style={{color:'black',bottom:25,width:250,left:120,borderRadius:5}}>Password: {data.password}</Text>
            <TextInput
            
                style={styles.input}
                placeholder="NIP"
                placeholderTextColor="black"
                onChangeText={(nip) => setNip(nip)}
                value={nip}
                
            />
            <Text style={{color:'black',fontWeight:'bold',bottom:50,fontFamily:'times new roman',fontSize:15,left:15}}>Edit Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan Password Lama"
                placeholderTextColor="black"
                // secureTextEntry={true}
                onChangeText={(password) => setPasswordLama(password)}
                value={passwordLama}
            />
            <Text style={{color:'black'}}></Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan Password Baru"
                placeholderTextColor="black"
                // secureTextEntry={true}
                onChangeText={(password) => setPasswordBaru(password)}
                value={passwordBaru}
            />
            <Text style={{color:'black'}}></Text>
            <TextInput 
                style={styles.input}
                placeholder="Konfirmasi Password"
                placeholderTextColor="black"
                // secureTextEntry={true}
                onChangeText={(password) => setKonfirmasiSandi(password)}
                value={konfirmasiSandi}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                    if (nip == "" || passwordLama == "" || passwordBaru == "" || konfirmasiSandi == "") {
                        ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT);
                    } else if (nip !== data.nip || passwordLama !== data.password) {
                        ToastAndroid.show('NIP atau Password Salah', ToastAndroid.SHORT);
                    } else if (passwordBaru !== konfirmasiSandi) {
                        ToastAndroid.show('Password Baru dan Konfirmasi Password Tidak Sama', ToastAndroid.SHORT);
                    } else {
                        resetPassword({ nip: nip, nama: nama, passwordLama: passwordLama, passwordBaru: passwordBaru })
                    }
                }}>
                <Text style={styles.textButton}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 50,
        backgroundColor: 'grey',
        borderRadius: 10,
        color: 'black',
        paddingHorizontal: 20,
        left:20,
        top:50

       
    },
    button: {
        width: 100,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        left:220,
        top:70
        
    },
    textButton: {
        color: 'black',
        fontSize: 10,
        fontWeight:'bold',
        fontFamily:'times new roman'

    },

})

export default Account