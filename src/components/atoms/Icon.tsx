import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IconProps {
  size: number;
  name: string;
  color?: string;
  iconFamily: 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons';
}

const Icon: React.FC<IconProps> = ({ iconFamily, name, size, color }) => {
  return (
    <>
      {iconFamily === 'Ionicons' && (
        <Ionicons name={name} color={color} size={size} />
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons name={name} color={color} size={size} />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons name={name} color={color} size={size} />
      )}
    </>
  );
};

export default Icon;
