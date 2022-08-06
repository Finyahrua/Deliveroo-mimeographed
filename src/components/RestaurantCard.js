import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  title,
  imgUrl,
  rating,
  genre,
  address,
  short_description,
  dishes,
  longt,
  lat,
}) => {
  return (
    <TouchableOpacity className="mr-3 shadow ">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-md mt-4" />
      <View className="pb-2 px-3">
        <Text className="text-lg font-bold pt-2">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-1 px-3">
        <StarIcon color="green" opacity={0.5} size={22} />
        <Text className="text-xs text-gray-500">
          <Text className="text-green-500">{rating}</Text> . {genre}
        </Text>
      </View>
      <View className="flex-row items-center space-x-1 px-3">
        <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
        <Text className="text-xs text-gray-500 ">{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
