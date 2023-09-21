// import React, { useState } from 'react';
// import { View, FlatList, Text, TouchableOpacity } from 'react-native';
// import { SimpleLineIcons } from '@expo/vector-icons';
// const sections = ['Popular', 'Religious', 'Natural'];

// const data = {
//   Popular: [
//     { id: '1', title: 'Item 1' },
//     { id: '2', title: 'Item 2' },
//     { id: '3', title: 'Item 3' },
//     { id: '4', title: 'Item 4' },
//     // Add more items
//   ],
//   Religious: [
//     { id: '5', title: 'Item 5' },
//     { id: '6', title: 'Item 6' },
//     { id: '7', title: 'Item 7' },
//     { id: '8', title: 'Item 8' },
//     // Add more items
//   ],
//   Natural: [
//     { id: '9', title: 'Item 9' },
//     { id: '10', title: 'Item 10' },
//     { id: '11', title: 'Item 11' },
//     { id: '12', title: 'Item 12' },
//     // Add more items
//   ],
// };

// const HomeGridComponent = () => {
//   const [currentSection, setCurrentSection] = useState(sections[0]);

//   const handleSectionChange = (section) => {
//     setCurrentSection(section);
//   };

//   const renderSectionHeader = (section) => (
//     <TouchableOpacity onPress={() => handleSectionChange(section)}>
//       <Text style={{ padding:4, paddingHorizontal:10,fontSize: 16, fontWeight: 'bold', color: currentSection === section ? 'white' : 'gray', backgroundColor:currentSection === section ? 'red' : 'white' }}>
//       <SimpleLineIcons name="fire" size={20} color="white" />
//         {section}</Text>
//     </TouchableOpacity>
//   );

//   const renderGridItem = ({ item }) => (
//     <View style={{ flex: 1, aspectRatio: 1, backgroundColor: 'lightgray', margin: 5, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>{item.title}</Text>
//     </View>
//   );

//   const sectionsData = data[currentSection];
//   const sectionRows = [];

//   for (let i = 0; i < sectionsData.length; i += 2) {
//     const rowData = sectionsData.slice(i, i + 2);
//     sectionRows.push(rowData);
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
//         {sections.map((section) => (
//           <View key={section}>
//             {renderSectionHeader(section)}
//           </View>
//         ))}
//       </View>
//       <FlatList
//         data={sectionRows}
//         keyExtractor={(item, index) => `row-${index}`}
//         renderItem={({ item }) => (
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             {item.map((gridItem) => (
//               <View key={gridItem.id} style={{ flex: 1 }}>
//                 {renderGridItem({ item: gridItem })}
//               </View>
//             ))}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default HomeGridComponent;

import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { useDataProvider } from "../context/DataProvider";
import { useRouter } from "expo-router";
const HomeGrid = () => {
  const data = useDataProvider();
  const router = useRouter();
  const width = Dimensions.get("window").width;

  const filteredData = data.slice(0, 4);

  const handleClick = (item) => {
    // router.push("/details", { item });
    router.push({
      pathname: "/details",
      params: {
        title: item.alt_description,
        // placeId: _id,
        // description: item.description,
        // totalRating: totalRating,
        // coordinates: coordinates.coordinates,
        // wardno: wardno,
        // location: location,
        url: item.urls.regular,
      },
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
      className=" gap-2 mt-2 "
    >
      {filteredData.map((item) => (
        <Pressable
          onPress={()=>handleClick(item)}
          key={item.id}
          className="w-40  h-56 bg-slate-300 rounded-xl "
          style={{ width: width / 2.2 }}
        >
          <Image
            className="rounded-xl"
            source={{ uri: item.urls.regular }}
            style={{ width: "100%", height: "100%" }}
          />
          <View className="absolute bottom-2 left-1">
            <Text>{item.title}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default HomeGrid;
