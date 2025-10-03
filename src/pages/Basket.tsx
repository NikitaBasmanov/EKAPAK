import { BasketIcon } from '../utils/svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import RightSideOfOrder from '../components/RightSideOfOrder';

import LineItem from '../components/LineItem';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    count: number;
    artNumber: number;
    isInStock: boolean;
}

const Basket = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        const items = localStorage.getItem('cart');
        if (items) {
            const itemsArray = JSON.parse(items);
            setItems(itemsArray);
        }
        console.log(items);
    }, []);

    const handleDelete = (id: number) => {
        const newItems = items.filter((item: Product) => item.id !== id);
        setItems(newItems);
        localStorage.setItem('cart', JSON.stringify(newItems));
    };

    return (
        <div
            className={`h-full w-full flex flex-col items-start justify-start`}
        >
            <div className="w-full flex flex-row items-center justify-start gap-[8px] mb-[42px] ">
                <p
                    className="text-[16px] sm:text-[18px] lg:text-[20px] text-center font-bold cursor-pointer bg-white py-[4px] px-[8px] rounded-[4px]"
                    onClick={() => navigate('/')}
                >
                    Главная
                </p>
                /
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-center font-bold bg-[#00B0FF] text-white cursor-pointer py-[4px] px-[8px] rounded-[4px]">
                    Корзина
                </p>
            </div>

            {items.length > 0 ? (
                <>
                    <div className="w-[50%] text-center py-[20px] sm:py-[30px] lg:py-[40px] flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-start gap-[8px] p-[10px] bg-white rounded-[10px]">
                            <p>{'<'}</p>
                            <p>Вернуться к покупкам</p>
                        </div>
                        <h1 className="text-[40px] font-bold leading-tight text-nowrap">
                            Корзина
                        </h1>
                    </div>
                    <div className="w-full flex flex-row items-start justify-between gap-[10px]">
                        <div className="w-[70%] bg-white rounded-[20px] p-[30px] flex flex-col items-center justify-between gap-[30px]">
                            {items.map((item) => (
                                <LineItem
                                    key={item.name}
                                    item={item}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                        <RightSideOfOrder />
                    </div>
                </>
            ) : (
                <div className="bg-white rounded-[10px] sm:rounded-[20px] text-center p-[20px] sm:p-[30px] lg:p-[40px] flex flex-col items-center justify-center gap-[10px]">
                    <BasketIcon className="mb-[10px]" />
                    <h1 className="text-[30px] sm:text-[32px] lg:text-[40px] font-bold leading-tight text-nowrap">
                        Ваша корзина пока пуста.
                    </h1>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                        Перейдите в каталог, чтобы выбрать товары
                    </p>
                    <h1
                        className="text-[18px] sm:text-[18px] lg:text-[20px] text-center font-bold text-[#00B0FF] cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Перейти в каталог
                    </h1>
                </div>
            )}
        </div>
    );
};

export default Basket;
