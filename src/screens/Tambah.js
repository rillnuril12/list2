import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React,  { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'


const Tambah = () => {
  const navigation = useNavigation();
  const [nama,setNama] = useState("");
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [date,setDate] = useState("");
  const [status,setStatus] = useState("");

  const handleTambah = async (value) => {
    console.log('value', value);

    try {
        const response = await axios.post('http://192.168.1.28:3300/todolist', {
            nama: value.nama,
            title: value.title,
            description: value.description,
            date: value.date,
            status: value.status
        })
        if (response.data.status == 200) {
            console.log('response', response.data)
            navigation.navigate('Dashboard')
            AsyncStorage.setItem
            await AsyncStorage.setItem('nama', value.nama,)
            await AsyncStorage.setItem('title', value.title)
            await AsyncStorage.setItem('description', value.description)
            await AsyncStorage.setItem('date', value.date)
            await AsyncStorage.setItem('status', value.status)
        }
    } catch (error) {
        console.log(error.message)
        ToastAndroid.show("", ToastAndroid.SHORT)
    }
  }

  return (
    <View style= {styles.container}>
      

      <View style= {styles.well} >
      <Text
      style={{
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold'
      }}>Buat Tugas Baru</Text>
      </View>
      
      <View style= {styles.user}>
        
        <Text style={{color: 'white',marginRight:240, fontSize: 15, marginTop:1}}>Nama</Text>
        <TextInput 
        style={styles.input1}
        placeholder="Enter Your Nama"
        placeholderTextColor="white"
        onChangeText={(nama) => setNama(nama)}
        value={nama}
        />

        <Text style={{color: 'white',marginRight:250, fontSize: 15, marginTop:15}}>Title</Text>
        <TextInput 
        style={styles.input2}
        placeholder="Enter Your title"
        placeholderTextColor="white"
        onChangeText={(title) => setTitle(title)}
        value={title}
        />

        <Text style={{color: 'white',marginRight:210, fontSize: 15, marginTop:15}}>description</Text>
        <TextInput 
        style={styles.input3}
        placeholder="Enter Your description"
        placeholderTextColor="white"
        onChangeText = {(description) => setDescription(description)}
        value = {description}
        />

        <Text style={{color: 'white',marginRight:250, fontSize: 15, marginTop:15}}>Date</Text>
        <TextInput 
        style={styles.input4}
        placeholder="Enter Your date"
        placeholderTextColor="white"
        onChangeText={(date) => setDate(date)}
        value={date}
        />

        <Text style={{color: 'white',marginRight:240, fontSize: 15, marginTop:15}}>status</Text>
        <TextInput 
        style={styles.input5}
        placeholder="Enter Your status"
        placeholderTextColor="white"
        onChangeText={(status) => setStatus(status)}
        value={status}
        />
        
       
        <TouchableOpacity style={styles.button}
          onPress={async () => {
            await handleTambah ({nama,title,description,date,status})
          }}
          >

          <Text style={styles.textButtom}
          onPress={()=> navigation.navigate('Dashboard')}
          >Submit</Text>
           
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#55BCF6',
  },
  well:{
    marginTop: 50,
    marginStart: 20,
  },
  user:{
    marginTop: 15,
    marginStart: 3,
    justifyContent: 'center',
    alignItems:'center',
  },
  input1: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input2: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input3: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input4: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input5: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    flexDirection: 'row',
    width: 300,
    height: 50,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  textButtom:{
    color: '#1A3150',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom:10
  },
  text: {
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  icon:{
    flexDirection: 'row',
    marginTop:50,
    marginStart: 25
  },
  icon1:{
      marginTop:11,
      marginStart: 25,
      left: 260
  },
  eye:{
    flexDirection: 'row',
  }
})
export default Tambah
