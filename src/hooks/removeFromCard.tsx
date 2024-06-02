import { useDispatch } from "react-redux";
import { removeFromCard } from "../Redux/slices/ShoppingcardSlice";

const useRemoveFromCard = () => {
  const dispatch = useDispatch();

  const removeProductFromCard = (id:string) => {
    dispatch(removeFromCard(id));
  };

  return removeProductFromCard;
};

export default useRemoveFromCard;
