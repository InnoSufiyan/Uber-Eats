import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import ResturantItem from '../../components/ResturantItem'
import SearchBar from '../../components/SearchBar'

const Home = () => {
    return (
        <View style={{ backgroundColor: '#eee',}}>
            <View style={{ backgroundColor: 'white', marginTop: 20, padding: 15 }}>
                <Header />
                <SearchBar />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Categories />
                <ResturantItem />
            </ScrollView>
        </View>
    )
}

export default Home
