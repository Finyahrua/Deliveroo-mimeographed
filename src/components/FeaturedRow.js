import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client, { urlFor } from "../../sanity";

const FeaturedRow = ({ id, title, Description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id==$id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
      }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }),
    [];
 
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500">{Description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Restaurant Card */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            imgUrl={urlFor(restaurant.image).url()}
            rating={restaurant.rating}
            genre={restaurant.type?.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            longt={restaurant.longt}
            lat={restaurant.lat}
          />
        ))}
       
      
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
