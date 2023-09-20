import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';   
const sections = ['Popular', 'Religious', 'Natural'];

const data = {
  Popular: [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    // Add more items
  ],
  Religious: [
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    // Add more items
  ],
  Natural: [
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
    { id: '11', title: 'Item 11' },
    { id: '12', title: 'Item 12' },
    // Add more items
  ],
};

const HomeGridComponent = () => {
  const [currentSection, setCurrentSection] = useState(sections[0]);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const renderSectionHeader = (section) => (
    <TouchableOpacity onPress={() => handleSectionChange(section)}>
      <Text style={{ padding:4, paddingHorizontal:10,fontSize: 16, fontWeight: 'bold', color: currentSection === section ? 'white' : 'gray', backgroundColor:currentSection === section ? 'red' : 'white' }}>
      <SimpleLineIcons name="fire" size={20} color="white" />
        {section}</Text>
    </TouchableOpacity>
  );

  const renderGridItem = ({ item }) => (
    <View style={{ flex: 1, aspectRatio: 1, backgroundColor: 'lightgray', margin: 5, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{item.title}</Text>
    </View>
  );

  const sectionsData = data[currentSection];
  const sectionRows = [];

  for (let i = 0; i < sectionsData.length; i += 2) {
    const rowData = sectionsData.slice(i, i + 2);
    sectionRows.push(rowData);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        {sections.map((section) => (
          <View key={section}>
            {renderSectionHeader(section)}
          </View>
        ))}
      </View>
      <FlatList
        data={sectionRows}
        keyExtractor={(item, index) => `row-${index}`}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {item.map((gridItem) => (
              <View key={gridItem.id} style={{ flex: 1 }}>
                {renderGridItem({ item: gridItem })}
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default HomeGridComponent;
