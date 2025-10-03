import { useState } from 'react';
import Button from './Button';
import Popup from './Popup';

interface Product {
    image: string;
    name: string;
    price: number;
    isInStock: boolean;
    artNumber: number;
    onAddToCart?: () => void;
    onRemoveFromCart?: () => void;
}

const Cart = ({ product }: { product: Product }) => {
    // const [isSelected, setIsSelected] = useState(false);
    const [count, setCount] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div className="flex flex-col w-full max-w-[280px] mx-auto items-center justify-between rounded-[8px] sm:rounded-[10px] hover:bg-[#F5F7FB] cursor-pointer bg-white border border-[#F5F7FB] p-[12px] sm:p-[15px] lg:p-[20px] min-h-[400px] sm:min-h-[450px]">
            <div className="flex flex-col items-center justify-center w-full">
                <img
                    className="w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[207px] h-[120px] sm:h-[150px] lg:h-[207px] object-cover mb-[12px] sm:mb-[15px] lg:mb-[20px]"
                    src={product.image}
                    alt="testProduct"
                />
                <p className="text-[9px] sm:text-[10px] lg:text-[12px] text-start w-full text-[#9A9A9A] mb-[3px] sm:mb-[4px]">
                    Арт. {product.artNumber}
                </p>
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-start font-manrope font-normal leading-[130%] sm:leading-[140%] align-middle text-wrap mb-[12px] sm:mb-[15px] lg:mb-[20px] line-clamp-2 min-h-[32px] sm:min-h-[36px] lg:min-h-[40px]">
                    {product.name}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-[15px] sm:mb-[20px] lg:mb-[30px] gap-[6px] sm:gap-0">
                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#2C2C2C] font-bold">
                        {product.price} ₽ / шт.
                    </p>
                    <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#00B0FF]">
                        Под заказ
                    </p>
                </div>
                <div className="flex flex-row h-[45px] sm:h-[50px] lg:h-[60px] items-center justify-between w-full px-[12px] sm:px-[15px] lg:px-[20px] py-[6px] sm:py-[8px] lg:py-[10px] mb-[8px] sm:mb-[10px] border border-[#DFDFDF] rounded-[8px] sm:rounded-[10px]">
                    <button
                        onClick={() => count > 0 && setCount(count - 1)}
                        className="px-[12px] sm:px-[15px] lg:px-[18px] h-full bg-[#F5F7FB] rounded-[4px] sm:rounded-[6px] text-[12px] sm:text-[14px] lg:text-[16px] min-w-[35px] sm:min-w-[40px]"
                    >
                        -
                    </button>
                    <div className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px]">
                        <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#2C2C2C]">
                            {count}
                        </p>
                        <p className="text-[9px] sm:text-[10px] lg:text-[12px] text-[#2C2C2C]">
                            на {count * product.price} ₽
                        </p>
                    </div>
                    <button
                        onClick={() => setCount(count + 1)}
                        className="px-[12px] sm:px-[15px] lg:px-[18px] h-full bg-[#F5F7FB] rounded-[4px] sm:rounded-[6px] text-[12px] sm:text-[14px] lg:text-[16px] min-w-[35px] sm:min-w-[40px]"
                    >
                        +
                    </button>
                </div>
                <Button
                    text="Добавить в корзину"
                    isFullWidth
                    onClick={() => {
                        let cart = [];
                        try {
                            const storedCart = localStorage.getItem('cart');
                            if (storedCart) {
                                cart = JSON.parse(storedCart);
                                if (!Array.isArray(cart)) {
                                    cart = [];
                                }
                            }
                        } catch (error) {
                            console.error(
                                'Ошибка при получении товаров из localStorage:',
                                error
                            );
                        }
                        cart.push({ ...product, count });
                        localStorage.setItem('cart', JSON.stringify(cart));

                        handleAddToCart();
                    }}
                />
            </div>

            {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default Cart;
