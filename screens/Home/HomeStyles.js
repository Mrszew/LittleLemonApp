import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    width: '100%',
  },

  heroContainer: {
    width: '100%',
    backgroundColor: '#495E57',
    padding: 15,
    position: 'relative',
  },
  heroHeader: {
    marginBottom: 15,
  },
  heroContent: {
    paddingRight: 120,
    marginBottom: 15,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E3B600',
  },
  heroSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  heroDescription: {
    fontSize: 16,
    color: '#ffffff',
  },
  heroImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },

  categoryContainer: {
  },
  categoryTitle: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    height: 80,
    margin: 10,
  },
  categorySeparator: {
    height: 1,
    backgroundColor: '#CED0CE',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(73, 94, 87, 0.2)',
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(73, 94, 87, 1)',
  },
  selectedCategoryButton: {
    backgroundColor: 'rgba(73, 94, 87, 1)',
  },
  selectedCategoryButtonText: {
    color: '#fff',
  },

  menuList: {
    // padding: 16,
  },
  noItemsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  noItemsText: {
    fontSize: 18,
    color: '#666',
  },
  menuItem: {
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  menuItemSeparator: {
    height: 1,
    backgroundColor: '#CED0CE',
  },
  menuItemInfo: {
    flex: 1,
    padding: 8,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItemImage: {
    width: 100,
    height: 100,
  },

});
