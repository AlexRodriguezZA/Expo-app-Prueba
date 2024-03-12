//Components
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

//Funciones y hooks
import { useDispatch } from 'react-redux';
import { UnAuthUser } from '../../Redux/Reducers/User/userSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(UnAuthUser());
  };

  return (
      <Button
        mode="text"
        icon="logout"
        onPress={handleLogout}
        labelStyle={styles.buttonLabel}
      >
        Logout
      </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginTop: 100
  },
  buttonLabel: {
    fontWeight: "700"  },
});

export default LogoutButton;
