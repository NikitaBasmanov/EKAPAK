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
}: {
    item: Product;
    onDelete: (id: number) => void;
}) => {
    const [count, setCount] = useState(item.count);
    return (
        <>
            <div className="w-full bg-white rounded-[20px]  flex flex-row items-center justify-between gap-[10px]">
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

                    <div className="flex flex-row h-[45px] sm:h-[50px] lg:h-[60px] items-center justify-between w-full px-[12px] sm:px-[15px] lg:px-[20px] py-[6px] sm:py-[8px] lg:py-[10px] border border-[#DFDFDF] rounded-[8px] sm:rounded-[10px]">
                        <button
                            onClick={() => count > 0 && setCount(count - 1)}
                            className="px-[12px] sm:px-[15px] lg:px-[18px] h-full bg-[#F5F7FB] rounded-[4px] sm:rounded-[6px] text-[12px] sm:text-[14px] lg:text-[16px] min-w-[35px] sm:min-w-[40px]"
                        >
                            -
                        </button>
                        <div className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[70px]">
                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#2C2C2C] text-center">
                                {count} шт.
                            </p>
                            <p className="text-[9px] sm:text-[10px] lg:text-[12px] text-[#9A9A9A]">
                                на {Math.round(count * item.price)} ₽
                            </p>
                        </div>
                        <button
                            onClick={() => setCount(count + 1)}
                            className="px-[12px] sm:px-[15px] lg:px-[18px] h-full bg-[#F5F7FB] rounded-[4px] sm:rounded-[6px] text-[12px] sm:text-[14px] lg:text-[16px] min-w-[35px] sm:min-w-[40px]"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex flex-col items-start justify-start text-nowrap">
                        <h1 className="text-[18px] leading-tight">
                            {Math.round(item.count * item.price)} ₽
                        </h1>
                        <p className="text-[16px] text-[#9A9A9A] leading-tight">
                            {item.count} x {item.price}
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-[10px]">
                        <div className="flex flex-row items-center bg-[#F5F7FB] rounded-[6px] p-[10px] justify-center gap-[10px] cursor-pointer">
                            <HeartIcon />
                        </div>
                        <div
                            onClick={() => onDelete(item.id)}
                            className="flex flex-row items-center bg-[#F5F7FB] rounded-[6px] p-[10px] justify-center gap-[10px] cursor-pointer"
                        >
                            <DeleteIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-full border-t border-dashed border-[#DFDFDF] "
                style={{
                    borderWidth: '1px',
                    borderStyle: 'dashed',
                }}
            ></div>
        </>
    );
};

export default LineItem;
