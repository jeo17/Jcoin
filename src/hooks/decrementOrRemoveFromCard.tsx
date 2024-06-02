import { useDispatch } from 'react-redux';
import { decrementOrRemoveFromCard } from '../Redux/slices/ShoppingcardSlice';

const useDecrementOrRemoveFromCard = () => {
  const dispatch = useDispatch();

  const decrementOrRemoveProductFromCart = (id: string) => {
    dispatch(decrementOrRemoveFromCard(id));
  };

  return decrementOrRemoveProductFromCart;
};

export default useDecrementOrRemoveFromCard;
