import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { AuthUser } from "../Redux/Reducers/User/userSlice";
import { addMenuModel } from "../Redux/Reducers/MenuModels/menuModelSlice";
import { processModules } from "../utils/ProcessModules";

const useAuthMutation = (apiFunction) => {
  const dispatch = useDispatch();

  const { mutate, isLoading, isError } = useMutation(apiFunction, {
    onSuccess: (data) => {
      const modulesArray = data.modules;
      
      //Procesamos los módulos para que nos queden en rutas y subrutas
      const finalResult = processModules(modulesArray);

      const userObject = {
        token: data.token,
        email: data.user.email,
        username: data.user.first_name,
      };

      
      //Cargamos el token y los models para el menú en el store de redux
      dispatch(AuthUser(userObject));
      dispatch(addMenuModel(finalResult));

    },
  });

  return { mutate, isLoading, isError };
};

export default useAuthMutation;
