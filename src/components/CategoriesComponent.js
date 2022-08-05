import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const CategoriesComponent = () => {
  return (
    <ScrollView
      contentContainerStyle={{paddingTop: 20 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1659350993037-e44fa91a6b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        Title="Hello"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1659350993037-e44fa91a6b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        Title="Hello"
      />
      <CategoryCard
        imgUrl="https://images.unsplash.com/photo-1659350993037-e44fa91a6b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        Title="Hello"
      />
    </ScrollView>
  );
}

export default CategoriesComponent