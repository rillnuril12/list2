import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'



import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Register = () => {
  const navigation = useNavigation()
  const [nip, setNip] = useState('')
  const [nama, setNama] = useState('')
  const [password, setPassword] = useState('')
  const [konfirmasi, setKonfirmasi] = useState('')

  const [passwordVisible, setPasswordVisible] = useState(true)
  const [konfirmasiVisible, setKonfirmasiVisible] = useState(true)

  const [data, setData] = useState({
    nip: '',
    password: '',
    nama: '',
  })

  console.log('nip', data.nip)
  console.log('password', data.password);
  console.log('nama', data.nama);

  useEffect(() => {
    getData()
    return () => { }
  }, [])

  const getData = async () => {
    try {
      let nip = await AsyncStorage.getItem('nip')
      let password = await AsyncStorage.getItem('password')
      let nama = await AsyncStorage.getItem('nama')

      if (nip !== null) {
        // value previously stored
        setData({
          nip: nip,
          password: password,
          nama: nama,
        })
      }
    } catch (e) {
      // error reading value
    }
  }

  const register = async (value) => {
    console.log('value', value)

    try {
      const response = await axios.post('http://192.168.1.28:3300/user', {
        nip: value.nip,
        nama: value.nama,
        password: value.password,
      })

      if (response.data.status == 200) {
        console.log('response', response.data)
        navigation.navigate('Dashboard')
        ToastAndroid.show("Successful registration", ToastAndroid.SHORT)
      }
    } catch (e) {
      console.log(e)
      ToastAndroid.show("Failed registration", ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
      {/* Back Section */}
      

      <Text style={styles.title}>Buat Akun Baru</Text>

      {/* Username Section */}
      <Text style={styles.label}>NIP</Text>
      <View style={styles.center}>
        <TextInput
          style={[styles.input]}
          placeholder='Enter your NIP'
          placeholderTextColor='#fff'
          onChangeText={(nip) => setNip(nip)}
          value={nip}
        />
      </View>

      {/* Password Section */}
      <Text style={styles.label}>Password</Text>
      <View style={[styles.center, { flexDirection: 'row' }]}>
        <TextInput
          style={[styles.input, { marginHorizontal: -13 }]}
          placeholder='Enter your password'
          placeholderTextColor='#fff'
          secureTextEntry={passwordVisible}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        {/* Eye Section */}
        <TouchableOpacity style={{ marginLeft: -20, marginTop: -4 }}>
          <Icon
            name={passwordVisible ? 'eye-off' : 'eye'} color='#fff' size={20}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        </TouchableOpacity>
      </View>

      {/* Konfirmasi Password Section */}
      <Text style={styles.label}>Konfirmasi Password</Text>
      <View style={[styles.center, { flexDirection: 'row' }]}>
        <TextInput
          style={[styles.input, { marginHorizontal: -13 }]}
          placeholder='Enter your password'
          placeholderTextColor='#fff'
          secureTextEntry={konfirmasiVisible}
          onChangeText={(konfirmasi) => setKonfirmasi(konfirmasi)}
          value={konfirmasi}
        />

        {/* Eye Section */}
        <TouchableOpacity style={{ marginLeft: -20, marginTop: -4 }}>
          <Icon
            name={konfirmasiVisible ? 'eye-off' : 'eye'} color='#fff' size={20}
            onPress={() => setKonfirmasiVisible(!konfirmasiVisible)}
          />
        </TouchableOpacity>
      </View>

      {/* Phone Section */}
      <Text style={styles.label}>Nama</Text>
      <View style={styles.center}>
        <TextInput
          style={[styles.input]}
          placeholder='Enter your Full Name'
          placeholderTextColor='#fff'
          onChangeText={(nama) => setNama(nama)}
          value={nama}
        />
      </View>

      <View style={styles.center}>
        {/* Submit Section */}
        <TouchableOpacity
          style={styles.btn_submit}
          onPress={async () => {
            if (nip == '' || password == '' || konfirmasi == '' || nama == '') {
                ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT);
            } else if (nip == data.nip) {
                ToastAndroid.show('Duplicate Account!', ToastAndroid.SHORT);
            } else if (password !== konfirmasi) {
                ToastAndroid.show('Password dan Konfirmasi Password Tidak Sama', ToastAndroid.SHORT);
            } else {
                register({ nip: nip, nama: nama, password: password })
            }
          }}
        >
          <Text style={styles.txt_submit}>Submit</Text>
        </TouchableOpacity>

        {/* Register Section */}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.txt_signin}>Already have an account? <Text style={{ color: 'black', textDecorationLine: 'underline',fontWeight:'bold' }}>Please Sign In</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginTop: 11,
    marginLeft: 24,
    textAlign:'left',
    marginLeft:5
  },

  label: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    marginRight: 30,
    marginTop: 30,
    
  },

  input: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
    width: 300,
    height: 40,
    fontSize: 12,
    paddingHorizontal: 15,
    marginBottom: 4,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    marginRight: 60,
    left:50
  },

  btn_submit: {
    backgroundColor: "yellow",
    alignItems: "center",
    width: 312,
    height: 40,
    borderRadius: 5,
    marginTop: 28,
    marginRight: 60,
    width:70,
    height:35,
    left:150,
    bottom:25
  },

  txt_submit: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    padding: 9,
    fontFamily:'times new roman'
  },

  txt_signin: {
    color: 'black',
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    bottom:50 ,
    marginRight: 60,
    right:5
  },
})

export default Register