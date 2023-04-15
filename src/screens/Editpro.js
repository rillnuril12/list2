import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Editpro = () => {
    const [userid, setUserid] = useState('')
    const [nama, setNama] = useState('')
    const [passwordLama, setPasswordLama] = useState('')
    const [passwordBaru, setPasswordBaru] = useState('')
    const [konfirmasiSandi, setKonfirmasiSandi] = useState("");

    const [data, setData] = useState({
        userid: '',
        password: '',
        nama: ''
    })

    console.log('userid', data.userid)
    console.log('password', data.password);
    console.log('nama', data.nama);

    useEffect(() => {
        getData()
        return () => { };
    }, []);

    const getData = async () => {
        try {
            let userid = await AsyncStorage.getItem('userid')
            let password = await AsyncStorage.getItem('password')
            let nama = await AsyncStorage.getItem('nama')
            if (userid !== null) {
                // value previously stored
                setData({
                    userid: userid,
                    nama: nama,
                    password: password,
                    nama: nama
                })
            }
        } catch (e) {
            // error reading value
        }
    }

    const resetPassword = async (value) => {
        console.log('value', value);
        try {
            const response = await axios.put('http://192.168.34.56:3300/users', {
                userid: value.userid,
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
        <View>
            <Text>{data.userid}</Text>
            <Text>{data.password}</Text>
            <Text>{data.nama}</Text>
            <Text>USER ID</Text>
            <TextInput
                style={styles.input}
                placeholder="Userid"
                placeholderTextColor="white"
                onChangeText={(userid) => setUserid(userid)}
                value={userid}
            />
            <Text>Nama</Text>
            <TextInput
                style={styles.input}
                placeholder="Userid"
                placeholderTextColor="white"
                onChangeText={(nama) => setNama(nama)}
                value={nama }
            />
            
            <Text>Password Lama</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan Password Lama"
                placeholderTextColor="white"
                // secureTextEntry={true}
                onChangeText={(password) => setPasswordLama(password)}
                value={passwordLama}
            />
            <Text>Password Baru</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukkan Password Baru"
                placeholderTextColor="white"
                // secureTextEntry={true}
                onChangeText={(password) => setPasswordBaru(password)}
                value={passwordBaru}
            />
            <Text>Konfirmasi Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Konfirmasi Password"
                placeholderTextColor="white"
                // secureTextEntry={true}
                onChangeText={(password) => setKonfirmasiSandi(password)}
                value={konfirmasiSandi}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                    if (userid == "" || passwordLama == "" || passwordBaru == "" || konfirmasiSandi == "") {
                        ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT);
                    } else if (userid !== data.userid || passwordLama !== data.password) {
                        ToastAndroid.show('Userid atau Password Salah', ToastAndroid.SHORT);
                    } else if (passwordBaru !== konfirmasiSandi) {
                        ToastAndroid.show('Password Baru dan Konfirmasi Password Tidak Sama', ToastAndroid.SHORT);
                    } else {
                        resetPassword({ userid: userid, nama: nama, passwordLama: passwordLama, passwordBaru: passwordBaru })
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
        backgroundColor: '#333',
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#f2ed46',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#000',
        fontSize: 20,
    },
})

export default Editpro