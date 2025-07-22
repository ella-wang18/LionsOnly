import {StyleSheet} from 'react-native';
import globals from '../../../../../util/globalStyles'

const images = {};

const iOSSearchHeader = globals.SCREEN_SIZE.height * 0.08;
const androidSearchHeader = globals.SCREEN_SIZE.height * 0.07;
const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    width: globals.SCREEN_SIZE.width,
    height: globals.DEVICE_TYPE ? iOSSearchHeader : androidSearchHeader,
    justifyContent: 'flex-end'
  },
  searchInput: {
    width: '100%',
    height: globals.SCREEN_SIZE.height * 0.08,
    borderBottomColor: globals.COLORS.secondary,
    borderBottomWidth: 1,
    paddingLeft: 20,
    fontSize: globals.SCREEN_SIZE.width * 0.06,
    color: globals.COLORS.white,
  },
  dataContainer: {
    height: globals.SCREEN_SIZE.height * 0.75,
    marginTop: globals.SCREEN_SIZE.height * 0.07,
  },
  imageBackground: {
    height: 225,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(0, 189, 235, 0.8)',
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
  },
  sport: {fontSize: globals.SCREEN_SIZE.width * 0.04}
});

export {images, styles};
