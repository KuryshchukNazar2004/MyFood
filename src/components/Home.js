import React from 'react';
import { Text, View, ScrollView, StatusBar, Image, TouchableOpacity, TextInput, FlatList} from 'react-native';
import {Categories ,COLORS }from '../database/items';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () =>{
    return (
      <View style={{
                width:'100%',
                height:'100%',
                backgroundColor:'COLORS.black',
              }}>
        <ScrollView>
          <View style={{
                width:'100%',
                height:'100%',
                backgroundColor: COLORS.white,
                position: 'relative'
            }}>
            <StatusBar barStyle={"dark-content"}/>
            <Image 
                source={require('../database/images/backgroundorg.png')} 
                style={{position: 'absolute', top: 0 }} />
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    padding:20
                }}>
                    <TouchableOpacity
                      style={{
                        width:40,
                        height:40
                      }}>
                        <Image source={require('../database/images/profile.png')}
                        style={{
                            width:'100%',
                            height:'100%',
                            resizeMode: 'contain',
                            borderRadius: 500,
                        }}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Material 
                      name="segment"
                      style={{
                        fontSize:28,
                        color:'#000'
                      }}/>
                    </TouchableOpacity>
              </View>
              <View style={{padding:20}}>
                <Text style={{
                      fontSize:25,
                      color:'#000',
                      opacity:0.5,
                      fontWeight:'400'
                }}>Food</Text>
                <Text style={{
                  fontSize:40,
                  color:'#000',
                  fontWeight:'600',
                  letterSpacing:2
                }}>
                  Delivery
                </Text>
              </View>
              <View style ={{
                paddingHorizontal:20,
                paddingVertical:10,
                flexDirection:'row',
                alignItems:'center'
              }}>
                <Ionicons name="search" style={{fontSize:20, color:"#000",opacity: 0.8}}/>
                <TextInput 
                placeholder="Search..."
                style={{
                  color:'#000',
                  fontSize:16,
                  paddingVertical:5,
                  borderBottomWidth:1,
                  borderBottomColor:'#000',
                  width:'90%',
                  marginLeft:10, 
                  letterSpacing:1

                }} />
              </View>
              <Text style={{
                paddingTop:20,
                paddingHorizontal: 20,
                fontSize:18,
                fontWeight:'700',
                color:'#000',
                letterSpacing:1,
              }}>Categories</Text>
              <FlatList 
                horizontal={true}
                data={Categories}
                />
          </View>
        </ScrollView>
      </View>
    );
};

export default Home