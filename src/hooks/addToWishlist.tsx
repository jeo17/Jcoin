import { useDispatch } from "react-redux";
import { addToWishlist } from "../Redux/slices/WishlistSlice";
import { products } from "../Redux/dataApi";

const useAddToWishlist = () => {
  const dispatch = useDispatch();

  const addProductToWishlist = (product: products) => {
    dispatch(addToWishlist(product));
  };

  return addProductToWishlist;
};

export default useAddToWishlist;
