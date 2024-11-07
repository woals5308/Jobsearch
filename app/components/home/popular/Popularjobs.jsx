import {
    View, 
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native"
import {useRouter} from "expo-router"
import {useState} from 'react'
import { PopularJobCard } from "../../../components"

import styles from "./popularjobs.style"
import {COLORS, SIZES} from "../../../../constants"

const Popularjobs =()=>{
    const router = useRouter()
    const isLoading  = false
    const error = false

    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerTitle}>Popularjobs</Text>
                <TouchableOpacity>
                    <Text style = {styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.cardsContainer}>
                {isLoading? (
                    <ActivityIndicator size="large" color={COLORS.primary}/>
                ):error?(<Text>somthing went wrong</Text>
                ):(
                     <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={(item)=>(
                            <PopularJobCard item = {item}/>
                        )}
                    />
                )}
            </View>
        </View>
    )
}

export default Popularjobs