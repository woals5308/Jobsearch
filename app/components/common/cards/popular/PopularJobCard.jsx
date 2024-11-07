import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native"
import styles  from "./popularjobcard.style"

const PopularJobCard = ({item, seletedJob, handleCardPress})=>{
    const checkImageURL = (url)=>{
        if (!url) return false
        else {
            const pattern = new RegExp(`^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$`, `i`)
            return pattern.test(url)
        } 
    }
    return(
        <TouchableOpacity style = {styles.container(seletedJob,item)}>
            <Image
                source={
                    checkImageURL(item?.employer_log)
                    ? {uri: item.employer_log}
                    : require("../../../../../assets/favicon.png")
                }
            />
        </TouchableOpacity>
    )
}

export default PopularJobCard