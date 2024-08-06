import { TouchableOpacity, Text } from 'react-native';
import { styles } from './HomeStyles';

const CategoryButton = ({ category, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.categoryButton,
        isSelected && styles.selectedCategoryButton,
      ]}
    >
      <Text
        style={[
          styles.categoryButtonText,
          isSelected && styles.selectedCategoryButtonText,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;
