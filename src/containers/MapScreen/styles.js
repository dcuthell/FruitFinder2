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
    width: 120,
    height: 120,
    padding: 6,
    borderWidth: 32,
    borderRadius: 60,
    alignItems: 'center',
    borderColor: '#65bc46',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  clusterImage: {
    height: 120,
    width: 120
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
