import { useDispatch } from "react-redux";
import { addToCard } from "../Redux/slices/ShoppingcardSlice";
import { products } from "../Redux/dataApi";
const useAddToCard = () => {
  const dispatch = useDispatch();

  const addProductToCard = (product: products) => {
    dispatch(addToCard(product));
  };

  return addProductToCard;
};

export default useAddToCard;
