import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../Redux/slices/WishlistSlice";


const useRemoveFromWishlist = () => {
  const dispatch = useDispatch();

  const removeProductFromWishlist = (id:string) => {
    dispatch(removeFromWishlist(id));
  };

  return removeProductFromWishlist;
};

export default useRemoveFromWishlist;
