import { Dialog, Portal, Button, Text } from 'react-native-paper';

const ErrorLogin = ({ visible, onDismiss }) => {
  return (
    <Portal>
      <Dialog  animationType="slide" visible={visible} onDismiss={onDismiss}>
        <Dialog.Title style={{color: "#a64452", fontWeight: 700}}>Error 😟</Dialog.Title>
        <Dialog.Content>
          <Text variant='bodyLarge'>Error al iniciar sesión. Por favor, verifica tus credenciales.</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ErrorLogin;
