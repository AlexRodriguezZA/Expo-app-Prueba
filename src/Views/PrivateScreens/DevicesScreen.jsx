// Components
import { View, StyleSheet } from "react-native";
import { Searchbar, Button, ActivityIndicator } from "react-native-paper";
import { DeviceList } from "../../components/DevicesList";

// Funciones y hooks
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useDebounce from "../../hook/useDebounce";
import useDevicesQuery from "../../hook/useDevicesQuery";

const DevicesScreen = () => {
  //Token que me permite hacer peticiones
  const { token } = useSelector((state) => state.user);
  
  const [Search, setSearch] = useState("");
  const [devices, setDevices] = useState([]);
  const [offset, setOffset] = useState(0); //offset nos permite ir cargando de a 5 (en este caso) devices
  const debouncedSearch = useDebounce(Search, 700); //Este custom hook nos permite tener un delay cada vez que se escribe en el search. Este se activa cada 700 milisegundos

  //Usamos el hooks de useDevicesQuery que nos permite realizar la petición, teniendo un estado que nos indica que si hubo un error,
  //si esta cargando o si obtuvimos la data
  const {
    data: devicesData,
    isLoading,
    isError,
  } = useDevicesQuery(token, offset, debouncedSearch, (data) => {
    if (offset === 0) {
      setDevices(data.results);
    } else {
      setDevices((prevDevices) => [...prevDevices, ...data.results]);
    }
  });

  //con esta función actualizamos el offset para que la api nos pueda dar los siguientes 5 devices
  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + 5);
  };

  
  useEffect(() => {
    //Cada vez que hacemos uso del search ponemos la lista en cero para poder mostrar solamente
    //el o los dispositivos que se encontraron
    setDevices([]);
    //También ponemos en 0 el offset para acomodar lista
    setOffset(0);
  }, [Search]);

  return (
    <View style={styles.container}>
      <View style={styles.containerSearchBar}>
        <Searchbar
          placeholder="Search item, item, item"
          placeholderTextColor="gray"
          onChangeText={(value) => setSearch(value)}
          value={Search}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator animating={true} size="large" />
      ) : (
        devices && (
          <>
            <DeviceList devices={devices} />

            <Button style={styles.buttonLoadmore} mode="contained" icon="plus" onPress={handleLoadMore}>
              Cargar más
            </Button>
          </>
        )
      )}
    </View>
  );
};

export default DevicesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  buttonLoadmore:{
    marginTop: 12,
    marginBottom: 12
  },
  containerSearchBar: {
    width: "90%",
    marginTop: 16,
    marginBottom: 16,
  },
});
