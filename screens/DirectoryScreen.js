import * as React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { Tile} from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import Loading from "../components/LoadingComponents";
import { View } from "react-native";


const DirectoryScreen = ({navigation}) => {
    const campsites = useSelector((state)=>state.campsites)
    if(campsites.isLoading){
        return <Loading/>
    }
    if(campsites.errMess){
        return (
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        )
    }

    const renderDirectoryItem = ({item: campsite}) => {
        return (
            <Tile
            title={campsite.name} 
            caption={campsite.description}
            featured
            onPress={()=> 
                navigation.navigate('CampsiteInfo',{campsite})
            }
            imageSrc = {{uri: baseUrl + campsite.image}}
            />
               
        );
    }
    return(
        <FlatList
        data={campsites.campsitesArray}
        renderItem = {renderDirectoryItem}
        keyExtractor={(item)=> item.id.toString()}

        />
    )
}

export default DirectoryScreen;