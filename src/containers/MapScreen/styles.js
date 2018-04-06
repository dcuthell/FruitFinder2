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
    width: 40,
    height: 40,
    padding: 6,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: '#65bc46',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  clusterImage: {
    height: 30,
    width: 30
  },
  clusterText: {
    fontSize: 17,
    color: '#f142f4',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
