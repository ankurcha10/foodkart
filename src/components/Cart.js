import { useDispatch, useSelector } from 'react-redux';
import ItemsList from './ItemsList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold mb-4'>Cart</h1>
            <div className='w-8/12 m-auto'>
                <button
                    className='m-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg'
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 ? (
                    <p className='text-gray-600 mt-4'>Your cart is empty.</p>
                ) : (
                    <ItemsList items={cartItems} />
                )}
            </div>
        </div>
    );
};

export default Cart;
