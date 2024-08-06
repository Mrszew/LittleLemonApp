const filterMenuItems = (menuItemsData, selectedCategories, searchTerm) => {
  // Convert searchTerm to lowercase once for efficiency
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  return menuItemsData.menu.filter(item => {
    // Ensure item.category and item.name are defined
    const itemCategory = item.category || '';
    const itemName = item.name || '';

    // Check if the item matches selected categories or if no categories are selected
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(itemCategory);
    
    // Check if the item name includes the search term or if searchTerm is empty
    const nameMatch = lowerCaseSearchTerm === '' || itemName.toLowerCase().includes(lowerCaseSearchTerm);

    return categoryMatch && nameMatch;
  });
};

export default filterMenuItems;
