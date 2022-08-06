import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, Description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500">{Description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Restaurant Card */}
        <RestaurantCard
          id={123}
          title="Ugalii"
          imgUrl="https://images.unsplash.com/photo-1656308918259-8ce8f38f0442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          rating={4.8}
          genre="Italian"
          address="123 Main St, New York, NY 10001"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Pizza", "Pasta", "Salad"]}
          longt={-73.965}
          lat={40.7128}
        />
        <RestaurantCard
          id={123}
          title="Ugalii"
          imgUrl="https://images.unsplash.com/photo-1656308918259-8ce8f38f0442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          rating={4.6}
          genre="Italian"
          address="123 Main St, New York, NY 10001"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          dishes={["Pizza", "Pasta", "Salad"]}
          longt={-73.965}
          lat={40.7128}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
