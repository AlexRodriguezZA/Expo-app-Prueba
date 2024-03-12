import { useQuery } from "react-query";
import { productsApi } from "../../services/EcommerceServices/productsApi";

const useProductsQuery = (onSuccessCallback) => {
  const queryKey = ["products"];
  return useQuery(
    queryKey,
    productsApi,
    {
      onSuccess: onSuccessCallback,
    }
  );
};

export default useProductsQuery;
