import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './HomeStyles';

import { getImageUrl } from "../../utils/apiDefinitions";
import { resolveImagePath } from '../../utils/imageUtils';

const MenuItem = ({ item }) => (

  <View style={styles.menuItem}>

    <View style={styles.menuItemInfo}>

      <Text style={styles.menuItemName}>
      {item.name}
      </Text>

      <Text style={styles.menuItemDescription}>
       {item.description}
      </Text>

      <Text style={styles.menuItemPrice}>
      ${item.price.toFixed(2)}
      </Text>

    </View>

    <Image
     source={{ uri: getImageUrl(item.image) }}
     style={styles.menuItemImage}
    />

  </View>

);

export default MenuItem;
