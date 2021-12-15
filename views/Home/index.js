import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import ResturantItem, { localResturant } from '../../components/ResturantItem'
import SearchBar from '../../components/SearchBar'

const Home = () => {
    const [resturantsData, setResturantsData] = useState(localResturant)
    console.log(resturantsData)
    return (
        <View style={{ backgroundColor: '#eee', height: '100%'}}>
            <View style={{ backgroundColor: 'white', marginTop: 20, padding: 15 }}>
                <Header />
                <SearchBar />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Categories />
                <ResturantItem resturantsData={resturantsData} />
            </ScrollView>
        </View>
    )
}

export default Home
