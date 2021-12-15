import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'

const Home = () => {
    return (
        <View style={{ backgroundColor: '#eee', height: '100%' }}>
            <View style={{ backgroundColor: 'white', marginTop: 50, padding: 15 }}>
                <Header />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <
            </ScrollView>
        </View>
    )
}

export default Home
