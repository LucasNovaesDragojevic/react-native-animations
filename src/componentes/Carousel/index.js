import React, { useEffect, useRef, useState } from 'react'
import { View, FlatList, Image } from 'react-native'
import styles from './styles'

export default function Carousel({data}) {

  const carouselRef = useRef()
  const [myIndex, setMyIndex] = useState(0)

  function changeVectorPosition() {
    if (myIndex < data.length - 1)
      setMyIndex(myIndex + 1)
    else
      setMyIndex(0)
  }

  useEffect(() => {
    carouselRef.current.scrollToIndex({index:myIndex})
    const interval = setInterval(() => {
      changeVectorPosition()
    }, 2000)
    return () => clearInterval(interval)
  }, [myIndex])

  return <View style={styles.container}>
      <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <Image
                source={item.imagem}
                style={[styles.image,
                index == data.length - 1 ? {marginRight: 200} : null
                ]}
                resizeMode="contain"
              />
            )}
            ref={carouselRef}
          />
  </View>
}