import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import CategoriesComponent from "../components/CategoriesComponent";
import FeaturedRow from "../components/FeaturedRow";
import client from "../../sanity";

const HomeScreen = () => {
  const [FeaturedCategory, setFeaturedCategory] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"]{...,
    restaurants[]->{
      ...,dishes[]->
    }}`
      )
      .then((data) => setFeaturedCategory(data));
  }),
    [];

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      {/* Header */}
      <View className="mx-4">
        <View className="flex-row items-center flex-1">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1659350993037-e44fa91a6b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
            className="h-8 w-8 bg-gray-500 rounded-full mr-2"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-500 text-xs">
              Deliver now!
            </Text>
            <Text className="font-bold text-black-500 text-xl">
              Current location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>
          <UserIcon size={35} color="#00ccbb" />
        </View>
        {/* search bar */}
        <View className="flex-row mt-2 items-center space-x-2">
          <View className="flex-row space-x-2 items-center flex-1 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsIcon size={25} color="#00ccbb" />
        </View>
        {/* body */}
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Categories */}
          <CategoriesComponent />
          {/* Featured */}
          {FeaturedCategory.map((item) => (
            <FeaturedRow
              key={item._id}
              id={item._id}
              title={item.name}
              Description={item.short_description}
            />
          ))}
         
          {/*  Tasty discounts*/}
          <FeaturedRow title="Discounts" Description="Tasty discounts" />
          {/*  Offers near you*/}
          <FeaturedRow title="Offers" Description="Offers near you" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
