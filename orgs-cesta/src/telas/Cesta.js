import React from "react";
import { StyleSheet, Dimensions, Image, Text} from "react-native";
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta(){
return(
    <>
    <Image source={topo} style={estilos.topo} />
    <Text>Detalhas da cesta</Text>
    </>
    
    )
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        heigth: 578 / 768 * width
    }
})