import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 5,
  },
  defaultAvatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 5,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    fontSize: 35,
    color: '#fff',
  },
  avatarButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  avatarButtonChange: {
    width: '40%',
    height: 40,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,

    elevation: 5, // 안드로이드에서 그림자 효과 적용
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS에서 그림자 위치
    shadowOpacity: 0.3, // iOS에서 그림자 투명도
    shadowRadius: 4, // iOS에서 그림자 반경 효과 적용
    marginVertical: 5,
  },
  avatarButtonTextChange: {
    color: '#ffffff',
    fontSize: 11,
    lineHeight: 18,
  },
  avatarButtonRemove: {
    width: '40%',
    height: 40,
    backgroundColor: '#ffffff',
    borderColor: '#495E57',
    borderWidth: 1,
    borderRadius: 0,
    marginLeft: 5,
    marginRight: 5,

    elevation: 5, // 안드로이드에서 그림자 효과 적용
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS에서 그림자 위치
    shadowOpacity: 0.3, // iOS에서 그림자 투명도
    shadowRadius: 4, // iOS에서 그림자 반경 효과 적용
    marginVertical: 5,
  },
  avatarButtonTextRemove: {
    color: '#495E57',
    fontSize: 11,
    lineHeight: 18,
  },

  formInput: {
    // borderWidth: 1,
    // borderColor: '#cccccc',
    // borderRadius: 5,
    // padding: 10,
    // fontSize: 14,
    marginTop: 10,
  },
  
  notificationsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonContainerLogout: {
    flex: 1,
  },
  buttonLogout: {
    width: '100%',
    height: 40,
    backgroundColor: '#f4ce14',
    borderColor: '#c07936',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,

    elevation: 5, // 안드로이드에서 그림자 효과 적용
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS에서 그림자 위치
    shadowOpacity: 0.3, // iOS에서 그림자 투명도
    shadowRadius: 4, // iOS에서 그림자 반경 효과 적용
    marginVertical: 5,
  },
  buttonTextLogout: {
    color: 'black',
    fontSize: 14,
    lineHeight: 17,
  },

  buttonContainerChanges: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonDiscardChanges: {
    width: '50%',
    height: 40,
    backgroundColor: '#ffffff',
    borderColor: '#495E57',
    borderWidth: 1,
    borderRadius: 0,
    marginLeft: 5,
    marginRight: 5,

    elevation: 5, // 안드로이드에서 그림자 효과 적용
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS에서 그림자 위치
    shadowOpacity: 0.3, // iOS에서 그림자 투명도
    shadowRadius: 4, // iOS에서 그림자 반경 효과 적용
    marginVertical: 5,
  },
  buttonTextDiscardChanges: {
    color: '#495E57',
    fontSize: 10,
    lineHeight: 18,
  },

  buttonSaveChanges: {
    width: '50%',
    height: 40,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,

    elevation: 5, // 안드로이드에서 그림자 효과 적용
    shadowColor: '#000', // iOS에서 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS에서 그림자 위치
    shadowOpacity: 0.3, // iOS에서 그림자 투명도
    shadowRadius: 4, // iOS에서 그림자 반경 효과 적용
    marginVertical: 5,
  },
  buttonTextSaveChanges: {
    color: '#ffffff',
    fontSize: 10,
    lineHeight: 18,
  },
});
