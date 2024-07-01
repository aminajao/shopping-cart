"use client";
import Container from '@/components/Container';
import { formatCurrency } from '@/utils';
import CartItemCard from 'components/CartItemCard';
import { TotalPriceSelector } from 'store/features/cartSlice';
import { useAppSelector } from 'store/store';

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <Container>
      <div className="p-2 grid grid-cols-9 gap-10">
        <div className="col-span-6">
          {cartItems.map((item) => (
            <CartItemCard cartItem={item} />
          ))}
        </div>
        <div className="col-span-1" />
        <div>
          <p className="text-slate-600 mt-5">
            Total Price:{' '}
            <span className="text-slate-900 font-bold">
              {formatCurrency(totalPrice)}
            </span>
          </p>
          <button className="bg-rose-500 text-white py-2 mt-5 px-10 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
