import {Text, View, SafeAreaView, ScrollView} from 'react-native'
import {Stack} from 'expo-router'
import {COLORS, icons, images, SIZES} from '../constants'
import {ScreenheaderBtn, Welcome, Nearbyjobs, Popularjobs} from './components'

const Home =()=>{
    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: ()=>(
                        <ScreenheaderBtn
                            iconUrl={icons.menu} dimension="60%"
                        />
                    ),
                    headerRight: ()=>(
                        <ScreenheaderBtn
                            iconUrl={images.profile} dimension="100%"
                        />
                    ),
                    headerTitle: "Header"
                }}

            />
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style={{flex:1, padding:SIZES.medium}}>
                     <Welcome/>
                     <Nearbyjobs/>
                     <Popularjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home