import React, {useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView,  SafeAreaView, FlatList,Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RefreshControl } from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

export default function App() {
  const [todo, setTodo] = useState([]);
  const navigation = useNavigation();
  const [data, setData] = useState({
    nama: '',
    title: '',
    description: '',
    date:'',
    status:'',

  });

  console.log('ini data todolist', todo);
  useEffect(() => {
    axios.get('http://192.168.1.28:3300/todolist').then(res => {
      

      setTodo(res.data.data);
    });
  }, 
  []);




  console.log('nama', data.nama);
  console.log('title', data.title);
  console.log('description', data.description);
  console.log('date', data.date);
  console.log('status', data.status);

  

  useEffect(() => {
    getData();
    
    return () => {};
  }, []);

  const getData = async () => {
    try {
      let nama = await AsyncStorage.getItem('nama');
      let title = await AsyncStorage.getItem('title');
      let description = await AsyncStorage.getItem('description');
      let date = await AsyncStorage.getItem('date');
      let status = await AsyncStorage.getItem('status');
      if (nama !== null) {
        // value previously stored
        setData({
          nama: nama,
          title: title,
          description: description,
          date:date,
          status:status,
        });
      }
    } catch (e) {
      
    }
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);




  return (

    <View style={styles.container}>

             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height: 170}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop:50 }}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Semua</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textButton}>Kerja</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textButton}>Pribadi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textButton}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textButton}>Hari ulang tahun</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>

            <FlatList
          data={todo}
          refreshControl={
            <RefreshControl>
              refreshing={refreshing}
              onRefresh={getData}
            </RefreshControl>
          }
          numColumns={1}
          keyExtractor={item => item.id}
          renderItem={e => {
            return (

              <TouchableOpacity
            
                style={{
                  flex: 1,
                  width:400,
                  height:50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 5,
                  borderWidth: 2,
                  borderColor: '#55BCF6',
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  padding: 5,
                  elevation: 10,
                  paddingBottom:10
                  
                }}
                onPress={()=> navigation.navigate('Edittodo')}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {e.item.nama}
                  </Text>
                  <Text>{e.item.title}</Text>
                  <Text>{e.item.description}</Text>
                  <Text>{e.item.date}</Text>
                  <Text>{e.item.status}</Text>
                  
                    
                  <TouchableOpacity onPress={async () =>{
                    await axios.delete(`http://192.168.1.28:3300/todolist/${e.item.id}`)
                  }}>
                  <View style={styles.actionIcon}>
                  <Text>Delete</Text>
                  </View>
                </TouchableOpacity>

                </View>
              </TouchableOpacity>

              
              
            );
          }}
        />


      

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TouchableOpacity onPress={()=> navigation.navigate('Tambah')}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  button: {
    flexDirection: 'row',
    width: 100,
    height: 29,
    left: 17,
    marginTop: 10,
    marginHorizontal: 7,
    backgroundColor: '#b3ecff',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#55BCF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontask: {
    flexDirection: 'row',
    width: 100,
    height: 29,
    left: 14,
    marginTop: 10,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button1: {
    flexDirection: 'row',
    width: 100,
    height: 29,
    left: 17,
    marginTop: 10,
    marginHorizontal: 7,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#55BCF6',
    activeDotColor: '#FDCB5A',
    justifyContent: 'center',
    alignItems: 'center',
},
textButtontask: {
  color: '#1A3150',
  fontSize: 18,
  fontWeight:'bold',
  marginRight: 10,
},
textButton: {
    color: '#1A3150',
    fontSize: 12,
},
  tasksWrapper: {
    paddingBottom: 1000,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
    borderRadius: 3,
  },
  addText: {
    color:'red',
  
  },
});