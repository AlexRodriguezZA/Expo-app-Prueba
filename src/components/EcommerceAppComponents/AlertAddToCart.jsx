import { Button, Dialog, Portal } from "react-native-paper";

const AlertAddToCart = ({ visible, hideDialog }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Agregado con éxito al carrito ✅</Dialog.Title>
        <Dialog.Actions>
          <Button icon="close" textColor="#78288C" onPress={hideDialog}>
            Cerrar
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AlertAddToCart;
