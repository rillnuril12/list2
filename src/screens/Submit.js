import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

const Submit = () => {
    const [ iconColor, setIconColor ] = useState(false)
    const colors = () => {
        setIconColor(!iconColor);
    };
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.atas}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Icon name='arrow-left' size={20} color={'#fff'}
                        style={styles.icon}
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: '#fff',
                        marginTop: 23,
                        marginLeft: 13
                    }}
                        onPress={() => navigation.goBack()}
                    >Sebelumnya</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={require('../assets/rs.jpg')}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '400',
                        marginTop: 19,
                        marginLeft: 16,
                        color: '#875C25'
                    }}>Batam</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        marginLeft: 16,
                        color: '#000'
                    }}>Klinik Kehewanan</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '700',
                        marginLeft: 16,
                        color: '#1A3150'
                    }}>Buka: 09.00 - 20.00</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        marginTop: 20,
                        marginLeft: 16,
                        color: '#000'
                    }}>Recomandasi Dokter</Text>
                </View>

                <TouchableOpacity style={styles.dokter}
                    onPress={() => colors()}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/Rectangle27.png')}
                            style={styles.foto}
                        />
                        <View>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginLeft: 16,
                                marginTop: 16,
                                color: '#875C25'
                            }}>Dokter Kucing</Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '700',
                                marginLeft: 16,
                                color: '#000'
                            }}>Dr. Alizah, SP. Kucing</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginLeft: 16,
                                color: '#1A3150'
                            }}>2 years experience</Text>
                        </View>
                    </View>
                    <Icon name='check-circle' size={15} color={iconColor ? '#a8a8a8' : '#000'}
                        style={{
                            marginRight: 26
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dokter}
                onPress={() => colors()}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/Rectangle28.png')}
                            style={styles.foto}
                        />
                        <View>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginLeft: 16,
                                marginTop: 16,
                                color: '#875C25'
                            }}>Dokter Kucing</Text>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '700',
                                marginLeft: 16,
                                color: '#000'
                            }}>Dr. Jaquin, SP. Hewan</Text>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginLeft: 16,
                                color: '#1A3150'
                            }}>2 years experience</Text>
                        </View>
                    </View>
                    <Icon name='check-circle' size={15} color={iconColor ? '#000' : '#a8a8a8'}
                        style={{
                            marginRight: 26
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        marginLeft: 16,
                        marginTop: 28,
                        color: '#000'
                    }}>Pilih Waktu Kunjungan</Text>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 72,
                        height: 24,
                        marginTop: 28,
                        marginRight: 16,
                        elevation: 4,
                        backgroundColor: '#fff'
                    }}>
                        <Image source={require('../assets/Group.png')}
                            style={{
                                width: 16,
                                height: 16,
                                marginLeft: 16,
                                marginVertical: 3
                            }}
                        />
                        <Image source={require('../assets/calendar.png')}
                            style={{
                                width: 8,
                                height: 5,
                                marginLeft: 14
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{
                            width: 95,
                            height: 44,
                            marginTop: 24,
                            marginLeft: 16,
                            marginBottom: 7,
                            borderRadius: 3,
                            elevation: 4,
                            backgroundColor: '#FDCB5A'
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginVertical: 7,
                                marginHorizontal: 28,
                                textAlign: 'center',
                                color: '#1A3150'
                            }}>Senin 12 Okt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 95,
                            height: 44,
                            marginTop: 24,
                            marginLeft: 16,
                            marginBottom: 7,
                            borderRadius: 3,
                            elevation: 4,
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginVertical: 7,
                                marginHorizontal: 28,
                                textAlign: 'center',
                                color: '#000'
                            }}>Selasa 13 Okt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 95,
                            height: 44,
                            marginTop: 24,
                            marginLeft: 16,
                            marginBottom: 7,
                            borderRadius: 3,
                            elevation: 4,
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginVertical: 7,
                                marginHorizontal: 28,
                                textAlign: 'center',
                                color: '#000'
                            }}>Rabu 14 Okt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 95,
                            height: 44,
                            marginTop: 24,
                            marginLeft: 16,
                            marginBottom: 7,
                            borderRadius: 3,
                            elevation: 4,
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                marginVertical: 7,
                                marginHorizontal: 28,
                                textAlign: 'center',
                                color: '#000'
                            }}>Kamis 15 Okt</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{
                        width: 128,
                        height: 34,
                        marginTop: 18,
                        marginLeft: 16,
                        marginBottom: 7,
                        borderRadius: 2,
                        elevation: 4,
                        backgroundColor: '#fff'
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginVertical: 9,
                            textAlign: 'center',
                            color: '#000'
                        }}>09:00 - 12:00 Pagi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 128,
                        height: 34,
                        marginTop: 18,
                        marginLeft: 16,
                        marginBottom: 7,
                        borderRadius: 2,
                        elevation: 4,
                        backgroundColor: '#FDCB5A'
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginVertical: 9,
                            textAlign: 'center',
                            color: '#1A3150'
                        }}>12:00 - 15:00 Siang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 128,
                        height: 34,
                        marginTop: 18,
                        marginLeft: 16,
                        marginBottom: 7,
                        borderRadius: 2,
                        elevation: 4,
                        backgroundColor: '#fff'
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginVertical: 9,
                            textAlign: 'center',
                            color: '#000'
                        }}>15:00 - 18:00 Sore</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '400',
                        marginLeft: 16,
                        marginTop: 32,
                        color: '#000'
                    }}>Hewan Peliharaan</Text>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 145,
                        height: 26,
                        marginRight: 16,
                        marginTop: 32,
                        marginBottom: 5,
                        borderRadius: 19,
                        borderWidth: 1,
                        borderColor: '#FDCB5A',
                        backgroundColor: '#fff'
                    }}
                        onPress={() => navigation.navigate('Tambahkan')}>
                        <Icon name='plus-circle' size={20} />
                        <Text style={{
                            fontSize: 12,
                            marginLeft: 8,
                            fontWeight: '400'
                        }}>Tambahkan Hewan</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.animal}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/emojicat.png')}
                            style={{
                                width: 28,
                                height: 28,
                                marginLeft: 16,
                                marginVertical: 9
                            }}
                        />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: 30,
                            marginVertical: 13,
                            color: '#000'
                        }}>Ronald / Male</Text>
                    </View>
                    <Icon name='close' size={15} color={'#000'}
                        style={{
                            marginRight: 15
                        }}
                    />
                </View>
                <View style={styles.animal}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/emojicat.png')}
                            style={{
                                width: 28,
                                height: 28,
                                marginLeft: 16,
                                marginVertical: 9
                            }}
                        />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: 30,
                            marginVertical: 13,
                            color: '#000'
                        }}>Reah / Famale</Text>
                    </View>
                    <Icon name='close' size={15} color={'#000'}
                        style={{
                            marginRight: 15
                        }}
                    />
                </View>
                <TouchableOpacity style={{
                    width: 340,
                    height: 50,
                    marginTop: 32,
                    marginLeft: 24,
                    marginBottom: 10,
                    borderRadius: 4,
                    backgroundColor: '#FDCB5A'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        marginVertical: 15,
                        marginLeft: 135,
                        color: '#000'
                    }} onPress={() => navigation.navigate('Sukses')}>Book Now</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    atas: {
        backgroundColor: '#1A3150',
        height: 70
    },
    icon: {
        marginTop: 25,
        marginLeft: 31
    },
    image: {
        width: 395,
        height: 204,
    },
    dokter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 360,
        height: 88,
        marginLeft: 16,
        marginTop: 8,
        elevation: 4,
        backgroundColor: '#fff'
    },
    foto: {
        width: 52,
        height: 52,
        marginLeft: 16,
        marginVertical: 18
    },
    animal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 360,
        height: 44,
        marginTop: 18,
        marginLeft: 16,
        marginBottom: 7,
        borderRadius: 6,
        elevation: 4,
        backgroundColor: '#fff'
    }
})

export default Submit