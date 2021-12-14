import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Header from '../../components/Header'

const Home = () => {
    return (
        <View style={{ backgroundColor: '#eee', height: '100%' }}>
            <View style={{backgroundColor : 'white', marginTop : 50, padding: 15}}>
                <Header />
            </View>
        </View>
    )
}

export default Home
