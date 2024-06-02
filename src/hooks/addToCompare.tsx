import { useDispatch } from "react-redux";
import { addToCompare } from "../Redux/slices/CompareSlice";
import { products } from "../Redux/dataApi";

const useAddToCompare = () => {
  const dispatch = useDispatch();

  const addProductToCompare = (product: products) => {
    dispatch(addToCompare(product));
  };

  return addProductToCompare;
};

export default useAddToCompare;
