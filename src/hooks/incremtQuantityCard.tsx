import { useDispatch } from 'react-redux';
import { incrementQuantityCard } from '../Redux/slices/ShoppingcardSlice';

const useIncrementQuantityCard = () => {
  const dispatch = useDispatch();

  const IncrementQuantityCardCart = (id: string) => {
    dispatch(incrementQuantityCard(id));
  };

  return IncrementQuantityCardCart;
};

export default useIncrementQuantityCard;
