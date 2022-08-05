import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,Title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Text className="absolute bottom-1 left-1 z-10 text-white font-bold">{Title}</Text>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
    </TouchableOpacity>
  );
}

export default CategoryCard