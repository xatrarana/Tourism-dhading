import { StyleSheet, View } from 'react-native';

const ShortHeader = ({ children }) => {
  return (
    <View style={styles.header} className = " bg-transparent">
      {children}
      

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 30,

  },
});

export default ShortHeader;