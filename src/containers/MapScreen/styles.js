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
    width: 48,
    height: 48,
    padding: 8,
    borderWidth: 12,
    borderRadius: 24,
    alignItems: 'center',
    borderColor: '#65bc46',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  clusterImage: {
    height: 48,
    width: 48
  },
  clusterText: {
    fontSize: 24,
    color: '#f142f4',
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 0
  },
});

export default styles;
