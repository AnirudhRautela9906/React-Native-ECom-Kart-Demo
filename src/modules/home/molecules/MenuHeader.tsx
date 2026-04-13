import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useState } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { menuData } from '@utils/db';
import MenuItem from '../atoms/MenuItem';
import Icon from '@components/atoms/Icon';
import { Colors } from '@utils/Constants';
import { RFValue } from 'react-native-responsive-fontsize';

const MenuHeader: FC<{ scrollY: any }> = ({ scrollY }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const opacityFadingStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);
    return {
      opacity,
    };
  });
  return (
    <Animated.View style={[styles.container, opacityFadingStyles]}>
      <SafeAreaView />
      <View style={styles.flexRow}>
        {menuData.map((item, i) => (
          <MenuItem
            key={i}
            item={item}
            isFocused={focusedIndex === i}
            onSelect={() => setFocusedIndex(i)}
          />
        ))}
      </View>
      <View style={styles.addressContainer}>
        <Icon size={16} name="home" iconFamily="Ionicons" />
        <Text style={styles.homeText}>Home</Text>
        <Text numberOfLines={1} style={styles.addressText}>
          9 DownTown, Hinjewadi Phase 1, Pune, Maharashtra, India
        </Text>
        <Icon size={16} name="chevron-forward-sharp" iconFamily="Ionicons" />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  homeText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: Colors.text,
    fontSize: RFValue(10),
  },
  addressText: {
    flex: 1,
    color: Colors.text,
    fontSize: RFValue(9),
  },
});
export default MenuHeader;
