import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Text,
} from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
interface MenuItemProps {
  item: { name: string; iconUri: string };
  isFocused: boolean;
  onSelect: () => void;
}
const MenuItem: React.FC<MenuItemProps> = ({ isFocused, item, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.container, isFocused && styles.focused]}
      onPress={onSelect}
    >
      <Image
        source={item?.iconUri as ImageSourcePropType}
        style={styles.icon}
      />
      <Text
        style={[
          styles.text,
          isFocused ? styles.textFocused : styles.textUnfocused,
        ]}
      >
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#e4e4e4',
  },
  focused: { backgroundColor: '#000' },
  icon: {
    width: RFValue(18),
    height: RFValue(18),
    marginVertical: 4,
  },
  text: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: RFValue(10),
  },
  textFocused: { color: '#fff' },
  textUnfocused: { color: '#000' },
});
export default MenuItem;
