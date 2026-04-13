import { View, Text, Platform } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { screenHeight } from '@utils/Constants';
import MenuHeader from './molecules/MenuHeader';
import SearchBar from './molecules/SearchBar';

const Home = () => {
  const insets = useSafeAreaInsets();
  const scrollYGlobal = useSharedValue(0);
  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 100],
      [0, -100],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ translateY }],
    };
  });
  return (
    <View style={{ flex: 1 }}>
      <View
        style={
          // { height: Platform.OS === 'android' ? insets.top : 0 }
          {}
        }
      >
        <Animated.View style={[moveUpStyle]}>
          <View>
            <MenuHeader scrollY={scrollYGlobal} />
            <SearchBar />
          </View>
        </Animated.View>
        <Animated.View
          style={[moveUpStyle, { height: screenHeight }]}
        ></Animated.View>
      </View>
    </View>
  );
};

export default Home;
