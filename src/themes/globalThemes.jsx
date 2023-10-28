import { StyleSheet } from 'react-native';

export const globalThemes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    color: '#212B36',
    padding: 10,
  },
  defaultInputText:{
    borderWidth:2,
    borderColor: '#919EAB',
    borderRadius: 5,
    paddingVertical: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 12,
    color: '#fff'
  },
  defaultBtn:{
    backgroundColor:  '#2065D1',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 30,
  },
  defaulTextBtn:{
    fontSize: 15,
        color: '#fff',
        fontWeight: '500'
  },
  footer:{
    fontSize: 13,
    position: 'absolute',
        color: '#212B36',
        alignSelf: 'center',
        marginVertical: 20,
        bottom: -20
  }

});
