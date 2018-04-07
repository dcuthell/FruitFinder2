import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clusterContainer: {
    width: 96,
    height: 96,
    padding: 16,
    borderWidth: 24,
    borderRadius: 48,
    alignItems: 'center',
    borderColor: '#65bc46',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  clusterImage: {
    height: 96,
    width: 96
  },
  clusterText: {
    fontSize: 48,
    color: '#f142f4',
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20
  },
});

export default styles;
