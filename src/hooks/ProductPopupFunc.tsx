import { useDispatch } from "react-redux";
import { showDialog, setProduct } from "../Redux/slices/QuickViewSlice";
import { products } from "../Redux/dataApi";



const useShowProductPopup = () => {
  const dispatch = useDispatch();

  const showProductPopup = (product: products) => {
    dispatch(showDialog());
    const productPopup = document.getElementById(
      "Quick-view"
    ) as HTMLDialogElement | null;
    productPopup?.showModal();
    dispatch(setProduct(product));
  };

  return showProductPopup;
};

export default useShowProductPopup;
