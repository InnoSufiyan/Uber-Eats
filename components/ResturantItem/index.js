import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const localResturant = [
    {
        name: "Mehboob",
        image_url: "",
        categories: ["Cafe", "Bar"],
        price: "50Rs",
        review: "Bad",
        rating: 3.5,
    },
    {
        name: "Student",
        image_url: "",
        categories: ["Cafe", "Bar"],
        price: "50Rs",
        review: "Bad",
        rating: 2.5,
    },
    {
        name: "Oh My Grill",
        image_url: "",
        categories: ["Cafe", "Bar"],
        price: "50Rs",
        review: "Bad",
        rating: 1.5,
    },
    {
        name: "Rizwan",
        image_url: "",
        categories: ["Cafe", "Bar"],
        price: "50Rs",
        review: "Bad",
        rating: 4.5,
    },
    {
        name: "Ghazi",
        image_url: "",
        categories: ["Cafe", "Bar"],
        price: "50Rs",
        review: "Bad",
        rating: 4.5,
    },
    {
        name: "Allah Wala",
        image_url: "",
        categories: ["Cafe", "Bar"],
        price: "50Rs",
        review: "Bad",
        rating: 4.5,
    },
]

const ResturantItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.resturantsData.map((item, index) => (
                <View style={{ marginTop: 15, padding: 15, backgroundColor: "white" }}>
                    <ResturantImage />
                    <ResturantInfo name={item.name} rating={item.rating} />
                </View>
            ))}
        </TouchableOpacity>
    )
}



export default ResturantItem

const ResturantImage = () => {
    return (
        <>
            <Image
                source={{
                    uri: "https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow="
                }}
                style={{
                    width: "100%", height: 180
                }}
            />
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
                <MaterialCommunityIcons name='heart-outline' color="white" size={25} />
            </TouchableOpacity>
        </>
    )
}

const ResturantInfo = (props) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, }}>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
                <Text style={{ fontSize: 13, fontWeight: 'gray' }}>30 - 45 . min</Text>
            </View>
            <View style={{ backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center', borderRadius: 15, justifyContent: 'center' }}>
                <Text>{props.rating}</Text>
            </View>
        </View>
    )
}