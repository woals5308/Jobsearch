import {Image, TouchableOpacity} from "react-native"
import styles from "./screenheaderBtn.style"

const screenheaderBtn =({iconUrl, dimension, handlePress})=>{
    return(
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                style={styles.btnImg(dimension)}
                source={iconUrl}
                resizeMode="cover"
            />
        </TouchableOpacity>
    )
}

export default screenheaderBtn