import { useDispatch } from "react-redux";
import { removeFromCompare } from "../Redux/slices/CompareSlice";


const useRemoveFromCompare = () => {
  const dispatch = useDispatch();

  const removeProductFromCompare = (id:string) => {
    dispatch(removeFromCompare(id));
  };

  return removeProductFromCompare;
};

export default useRemoveFromCompare;
