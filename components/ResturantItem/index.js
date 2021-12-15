import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const ResturantItem = () => {
    return (
        <View>
            <ResturantImage />
        </View>
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

const ResturantInfo = () => {
    return (
        <View>

            <Text>kuch bhi</Text>
        </View>
    )
}