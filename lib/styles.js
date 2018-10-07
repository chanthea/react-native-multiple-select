/*!
 * react-native-multi-select
 * Copyright(c) 2017 Mustapha Babatunde Oluwaleke
 * MIT Licensed
 */
import { Dimensions } from 'react-native';

export const colorPack = {
  primary: '#00A5FF',
  primaryDark: '#215191',
  light: "#f1f2f6",
  textPrimary: '#525966',
  placeholderTextColor: 'rgba(0,0,0,0.8)',
  danger: '#C62828',
  borderColor: '#e9e9e9',
  backgroundColor: '#b1b1b1',
};

export default {
  footerWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  footerWrapperNC: {
    width: 320,
    flexDirection: 'column',
  },
  subSection: {
    backgroundColor: colorPack.light,
    borderBottomWidth: 1,
    borderColor: colorPack.borderColor,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  greyButton: {
    height: 40,
    borderRadius: 5,
    elevation: 0,
    backgroundColor: colorPack.backgroundColor,
  },
  indicator: {
    fontSize: 30,
    color: colorPack.placeholderTextColor,
  },
  selectedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingVertical : 5,
    paddingRight: 3,
    marginHorizontal : 3,
    marginVertical : 7,
    borderRadius: 20,
    borderWidth: 2
  },
  button: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colorPack.light,
    fontSize: 14,
  },
  selectorView: (fixedHeight) => {
    const style = {
      flexDirection: 'column',
      marginBottom: 10,
      paddingTop : 0,
      paddingBottom :10,
      elevation: 2,
    };
    if (fixedHeight) {
      style.height = Dimensions.get('window').height-150;
    }
    return style;
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    backgroundColor: colorPack.light,
    borderRadius : 5
  },
  dropdownView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginBottom: 15,
    marginTop : 0
  },
};
