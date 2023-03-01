import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { CardConsulta } from "../../componentes/CardConsulta";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import soniaFoto from "../../assets/sonia.png";
import pacientes from "./pacientes";
import styles from "./styles";
import AppointmentCardShimmerEffect from '../../componentes/AppointmentCardShimmerEffect'

export default function Principal({ navigation }) {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(true)
    }, 3000)
  }, [])

  return (
    <TelaDeFundo>
    <View style={styles.container}>
      <InformacoesUsuario 
        nome="Olá Sônia"
        detalhes="Mais 4 consultas hoje"
        foto={soniaFoto}
      />

      <Text style={styles.texto}>Hoje</Text>


      { isLoading ? 
        <FlatList
        data={pacientes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate("Detalhes", item)}>
        <CardConsulta {...item} />
          </TouchableOpacity>
        }
        showsVerticalScrollIndicator={false}
        />
        :
        <>
          <AppointmentCardShimmerEffect/>
          <AppointmentCardShimmerEffect/>
          <AppointmentCardShimmerEffect/>
        </>
      }


    </View> 
    </TelaDeFundo>
  );
}