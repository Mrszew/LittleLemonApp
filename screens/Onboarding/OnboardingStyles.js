import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
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

  formContainer: {
    padding: 15,
  },
  formTitle: {
    marginBottom: 15,
  },
  formInput: {
    // borderWidth: 1,
    // borderColor: '#cccccc',
    // borderRadius: 5,
    // padding: 10,
    // fontSize: 16,
    marginTop: 10,
  },
  formButtonContainer: {
    alignItems: 'flex-end',
  },
  formButton: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#495E57',
    borderRadius: 8,
	marginTop: 10,

    elevation: 5, // 안드로이드에서 그림자 효과 적용
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS에서 그림자 위치
    shadowOpacity: 0.3, // iOS에서 그림자 투명도
    shadowRadius: 4, // iOS에서 그림자 반경 효과 적용
  },
  formButtonText: {
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 18,
  },

});
