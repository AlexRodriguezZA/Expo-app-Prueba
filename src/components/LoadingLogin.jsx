import { Modal, View, StyleSheet } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const LoadingLogin = ({ visible }) => (
  <Modal transparent={true} visible={visible}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <ActivityIndicator size={50} animating={true} color={MD2Colors.lightBlue300} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo oscuro con opacidad
  },
  modalContent: {
    backgroundColor: 'white', // Puedes ajustar el color de fondo si lo deseas
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

export default LoadingLogin;
