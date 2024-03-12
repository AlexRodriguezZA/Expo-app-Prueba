import { useQuery } from "react-query";
import { fetchDevices } from "../services/DevicesServices/DevicesApi";

const useDevicesQuery = (token, offset, debouncedSearch, onSuccessCallback) => {
  const queryKey = ["devices", token, offset, debouncedSearch];
  return useQuery(
    queryKey,
    () =>
      fetchDevices({
        tokenUser: token,
        pageParam: offset,
        search: debouncedSearch,
      }),
    {
      onSuccess: onSuccessCallback,
    }
  );
};

export default useDevicesQuery;
