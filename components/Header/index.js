import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Header = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 50, }} >
            <HeaderButton text="Delivery" btnColor={activeTab === "Delivery" ? "black" : "white"} textColor={activeTab === "Delivery" ? "white" : "black"} activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton text="Pick up" btnColor={activeTab !== "Delivery" ? "black" : "white"} textColor={activeTab !== "Delivery" ? "white" : "black"} activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}

export default Header


const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{ backgroundColor: props.btnColor, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 30 }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{ color: props.textColor, fontSize: 15, fontWeight: "900px", }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}