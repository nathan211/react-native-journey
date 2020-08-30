import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';


export default class Categories extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 0, name: 'category list item 1' },
        { id: 1, name: 'category list item 2' },
        { id: 2, name: 'category list item 3' }
      ]
    }
  }

  render(){
    const { categories } = this.state;
    return (
      <FlatList 
        data={categories}
        renderItem={({ item }) => <CategoryListItem category={ item } />}
        keyExtractor={item => `${item.id}`}
      />
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
