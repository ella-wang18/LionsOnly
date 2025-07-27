import {StyleSheet} from 'react-native';
import globals from "../../../../util/globalStyles";

const images = {};

const styles = StyleSheet.create({
  userInfoContainer: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileImage: {
    width: globals.SCREEN_SIZE.width * 0.38,
    height: globals.SCREEN_SIZE.width * 0.38,
  },
  userDataContainer: {
    height: '100%',
    paddingTop: 20,
    paddingLeft: 10,
  },
  userData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  userDataLabel: {
    fontWeight: 'bold',
    fontSize: globals.SCREEN_SIZE.width * 0.04,
    marginRight: 5,
  },
  userDataInfo: {
    fontSize: globals.SCREEN_SIZE.width * 0.04,
  },
  editContainer: {
    height: '100%',
  },
  buttonContainer: {
    width: globals.SCREEN_SIZE.width,
    height: 60,
    marginLeft: -globals.SCREEN_SIZE.width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: '100%',
    width: '50%',
  },
  modalContainer: {flex: 1, backgroundColor: 'rgba(0,0,0,.60'},
  modalForm: {
    width: '100%',
    height: globals.SCREEN_SIZE.height * 0.50,
    backgroundColor: globals.COLORS.backgroundColor,
    position: 'absolute',
    paddingLeft: globals.SCREEN_SIZE.width * 0.03,
    paddingRight: globals.SCREEN_SIZE.width * 0.03,
    bottom: 0,
  },
  saveContainer: {
    width: '100%',
    height: '10%',
    marginBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
  image: {
    margin: 5,
    height: globals.SCREEN_SIZE.height * 0.15,
    width: globals.SCREEN_SIZE.width * 0.45,
  }
});

export {images, styles};
