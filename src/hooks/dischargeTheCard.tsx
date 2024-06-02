import { useDispatch } from "react-redux";
import { dischargeTheCard } from "../Redux/slices/ShoppingcardSlice";
const useDischargeTheCard = () => {
  const dispatch = useDispatch();

  const discharge = () => {
    dispatch(dischargeTheCard());
  };

  return discharge;
};

export default useDischargeTheCard;