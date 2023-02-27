import { View, FlatList, Image } from 'react-native'
import styles from './styles'

export default function Carousel({data}) {
    return <View style={styles.container}>
        <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Image
                  source={item.imagem}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
            />
    </View>
}