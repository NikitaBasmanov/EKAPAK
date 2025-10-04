import { HeartIcon, DeleteIcon } from '../utils/svg';
import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    count: number;
    artNumber: number;
    isInStock: boolean;
}

const LineItem = ({
    item,
    onDelete,
    isLast,
    onUpdate,
}: {
    item: Product;
    onDelete: (artNumber: number) => void;
    isLast: boolean;
    onUpdate: () => void;
}) => {
    const [count, setCount] = useState(item.count);

    const updateCartItem = (newCount: number) => {
        try {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                const cart = JSON.parse(storedCart);
                const updatedCart = cart.map((cartItem: Product) =>
                    cartItem.artNumber === item.artNumber
                        ? { ...cartItem, count: newCount }
                        : cartItem
                );
                localStorage.setItem('cart', JSON.stringify(updatedCart));
            }
        } catch (error) {
            console.error('Ошибка при обновлении корзины:', error);
        }
    };

    const handleCountChange = (newCount: number) => {
        if (newCount > 0) {
            setCount(newCount);
            updateCartItem(newCount);
            onUpdate();
        } else if (newCount === 0) {
            onDelete(item.artNumber);
        }
    };
    return (
        <>
            <div className="w-full bg-white rounded-[20px] p-[15px] sm:p-[20px] lg:p-[30px]">
                <div className="flex flex-col lg:hidden gap-[15px]">
                    <div className="flex flex-row items-start justify-start gap-[15px]">
                        <img
                            className="w-[80px] h-[80px] sm:w-[87px] sm:h-[87px] object-cover rounded-[8px]"
                            src={item.image}
                            alt="testProduct"
                        />
                        <div className="flex flex-col items-start justify-start flex-1 min-w-0">
                            <p className="text-[12px] text-[#9A9A9A] leading-tight">
                                Арт. {item.artNumber}
                            </p>
                            <h2 className="text-[14px] sm:text-[16px] leading-tight text-wrap line-clamp-2">
                                {item.name}
                            </h2>
                            <p className="text-[12px] sm:text-[14px] rounded-[6px] text-[#2AC84D] leading-tight bg-[#EDFFF1] text-nowrap p-[6px] sm:p-[8px] mt-[8px]">
                                В наличии {item.isInStock ? 'Да' : 'Нет'}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row h-[40px] sm:h-[45px] items-center justify-between px-[12px] sm:px-[15px] py-[6px] sm:py-[8px] border border-[#DFDFDF] rounded-[8px] sm:rounded-[10px]">
                            <button
                                onClick={() => handleCountChange(count - 1)}
                                className="px-[12px] sm:px-[15px] h-full bg-[#F5F7FB] rounded-[4px] sm:rounded-[6px] text-[12px] sm:text-[14px] min-w-[35px] sm:min-w-[40px]"
                            >
                                -
                            </button>
                            <div className="flex flex-col items-center justify-center min-w-[50px] sm:min-w-[60px]">
                                <p className="text-[12px] sm:text-[14px] text-[#2C2C2C] text-center">
                                    {count} шт.
                                </p>
                                <p className="text-[9px] sm:text-[10px] text-[#9A9A9A]">
                                    на {Math.round(count * item.price)} ₽
                                </p>
                            </div>
                            <button
                                onClick={() => handleCountChange(count + 1)}
                                className="px-[12px] sm:px-[15px] h-full bg-[#F5F7FB] rounded-[4px] sm:rounded-[6px] text-[12px] sm:text-[14px] min-w-[35px] sm:min-w-[40px]"
                            >
                                +
                            </button>
                        </div>

                        <div className="flex flex-col items-end justify-start text-right">
                            <h1 className="text-[16px] sm:text-[18px] leading-tight">
                                {Math.round(count * item.price)} ₽
                            </h1>
                            <p className="text-[12px] sm:text-[14px] text-[#9A9A9A] leading-tight">
                                {count} x {item.price}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-end gap-[10px]">
                        <div className="flex flex-row items-center bg-[#F5F7FB] rounded-[6px] p-[8px] sm:p-[10px] justify-center gap-[6px] sm:gap-[10px] cursor-pointer">
                            <HeartIcon />
                        </div>
                        <div
                            onClick={() => onDelete(item.artNumber)}
                            className="flex flex-row items-center bg-[#F5F7FB] rounded-[6px] p-[8px] sm:p-[10px] justify-center gap-[6px] sm:gap-[10px] cursor-pointer"
                        >
                            <DeleteIcon />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-row items-center justify-between gap-[10px]">
                    <div className="flex flex-row items-start justify-start gap-[10px]">
                        <img
                            className="w-[87px] h-[87px] object-cover"
                            src={item.image}
                            alt="testProduct"
                        />
                        <div className="flex flex-col items-start justify-start">
                            <p className="text-[12px] text-[#9A9A9A] leading-tight text-nowrap">
                                {' '}
                                Арт. {item.artNumber}
                            </p>
                            <h2 className="text-[16px] max-w-[220px] leading-tight text-wrap">
                                {item.name}
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center gap-[30px] mb-[30px]">
                        <p className="text-[16px] rounded-[6px] text-[#2AC84D] leading-tight bg-[#EDFFF1] text-nowrap p-[10px]">
                            В наличии {item.isInStock ? 'Да' : 'Нет'}
                        </p>

                        <div className="flex flex-row h-[60px] items-center justify-between w-full px-[20px] py-[10px] border border-[#DFDFDF] rounded-[10px]">
                            <button
                                onClick={() => handleCountChange(count - 1)}
                                className="px-[18px] h-full bg-[#F5F7FB] rounded-[6px] text-[16px] min-w-[40px]"
                            >
                                -
                            </button>
                            <div className="flex flex-col items-center justify-center min-w-[70px]">
                                <p className="text-[18px] text-[#2C2C2C] text-center">
                                    {count} шт.
                                </p>
                                <p className="text-[12px] text-[#9A9A9A]">
                                    на {Math.round(count * item.price)} ₽
                                </p>
                            </div>
                            <button
                                onClick={() => handleCountChange(count + 1)}
                                className="px-[18px] h-full bg-[#F5F7FB] rounded-[6px] text-[16px] min-w-[40px]"
                            >
                                +
                            </button>
                        </div>

                        <div className="flex flex-col items-start justify-start text-nowrap">
                            <h1 className="text-[18px] leading-tight">
                                {Math.round(count * item.price)} ₽
                            </h1>
                            <p className="text-[16px] text-[#9A9A9A] leading-tight">
                                {count} x {item.price}
                            </p>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-[10px]">
                            <div className="flex flex-row items-center bg-[#F5F7FB] rounded-[6px] p-[10px] justify-center gap-[10px] cursor-pointer">
                                <HeartIcon />
                            </div>
                            <div
                                onClick={() => onDelete(item.artNumber)}
                                className="flex flex-row items-center bg-[#F5F7FB] rounded-[6px] p-[10px] justify-center gap-[10px] cursor-pointer"
                            >
                                <DeleteIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {!isLast && (
                <div
                    className="w-full border-t border-dashed border-[#DFDFDF] "
                    style={{
                        borderWidth: '1px',
                        borderStyle: 'dashed',
                    }}
                ></div>
            )}
        </>
    );
};

export default LineItem;
