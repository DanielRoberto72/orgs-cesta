import React from "react";
import { StyleSheet, Image, View, TouchableOpacity} from "react-native";


import Texto from "../../../componentes/Texto";

export default function Detalhes({nome, logo, fazenda, descricao, preco,botao}){
    return(
        <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemfazenda}/>
                <Texto style={estilos.nomeFazenda}>{fazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <TouchableOpacity style={estilos.botao} onPress={()=>{}}>
                <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
        </>
        )
}

const estilos = StyleSheet.create({
    nome:{
        color: "#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight: "bold"
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemfazenda:{
        width: 32,
        height: 32,
        
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight:26,
        marginLeft: 12,
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2A9f85",
        fontWeight: "bold",
        fontSize:26,
        lineHeight: 42,
        marginTop:8
    },
    botao:{
        marginTop: 16,
        paddingVertical: 16,
        backgroundColor: "#2a9f85",
        borderRadius: 6
    },
    textoBotao:{
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"

    }
})