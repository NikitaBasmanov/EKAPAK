import { PercentIcon, UrgentOrderIcon } from '../utils/svg';
import Switch from './Switch';
import { useState } from 'react';
import Button from './Button';

const RightSideOfOrder = () => {
    const [urgentOrder, setUrgentOrder] = useState(false);

    return (
        <div className="w-full  flex flex-col items-start justify-start p-[15px] sm:p-[20px] lg:p-[30px] bg-white rounded-[20px]">
            <h1 className="text-[18px] sm:text-[20px] font-bold leading-tight text-nowrap">
                Ваш заказ
            </h1>

            <div className="w-full flex rounded-[10px] bg-[#F5F7FB] flex-row p-[15px] sm:p-[20px] items-start justify-start my-[5px] gap-[10px]">
                <div className="w-full flex flex-col items-start justify-between">
                    <h1 className="text-[16px] sm:text-[18px] leading-tight">
                        До скидки{' '}
                        <span className="text-[#00B0FF] font-bold">5%</span>
                    </h1>
                    <p className="text-[11px] sm:text-[12px] leading-tight">
                        Осталось 3250 р{' '}
                    </p>
                </div>
                <PercentIcon />
            </div>

            <div className="w-full mb-[20px] sm:mb-[30px] flex rounded-[10px] p-[15px] sm:p-[20px] bg-white flex-row items-center justify-between my-[5px] gap-[10px] border border-[#DFDFDF]">
                <div className="flex flex-row items-center justify-center gap-[6px]">
                    <span className="text-[14px] sm:text-[16px]">
                        Срочный заказ:
                    </span>{' '}
                    <UrgentOrderIcon />
                </div>
                <Switch checked={urgentOrder} onChange={setUrgentOrder} />
            </div>

            <div className="w-full flex flex-row items-start justify-between">
                <h1 className="text-[16px] sm:text-[18px] leading-tight">
                    3 товара
                </h1>
                <h1 className="text-[16px] sm:text-[18px] leading-tight">
                    500 000.24₽
                </h1>
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#9A9A9A] leading-tight">
                {'( 0.0020 м³ / 4.04 кг )'}
            </p>
            <div
                className="w-full border-t border-dashed border-[#DFDFDF] my-[15px] sm:my-[20px]"
                style={{
                    borderWidth: '1px',
                    borderStyle: 'dashed',
                }}
            ></div>

            <div className="w-full flex flex-row items-start justify-between">
                <h1 className="text-[16px] sm:text-[18px] leading-tight">
                    Общая скидка:
                </h1>
                <h1 className="text-[16px] sm:text-[18px] text-[#00B0FF] leading-tight">
                    80.00₽
                </h1>
            </div>
            <div className="w-full flex flex-row items-start justify-between">
                <h1 className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#9A9A9A] leading-tight">
                    Cсылка на страницу Скидки
                </h1>
                <h1 className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#00B0FF] leading-tight font-bold">
                    Подробнее
                </h1>
            </div>
            <div
                className="w-full border-t border-dashed border-[#DFDFDF] my-[15px] sm:my-[20px]"
                style={{
                    borderWidth: '1px',
                    borderStyle: 'dashed',
                }}
            ></div>

            <div className="w-full flex flex-row items-start justify-between">
                <h1 className="text-[16px] sm:text-[18px] font-bold leading-tight">
                    Всего:
                </h1>
                <h1 className="text-[20px] sm:text-[24px] leading-tight">
                    56 515.00₽
                </h1>
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#9A9A9A] leading-tight">
                В том числе НДС 20%
            </p>

            <div className="w-full flex flex-row items-start justify-start gap-[8px] sm:gap-[10px] mt-[20px] sm:mt-[30px] mb-[10px]">
                <label className="inline-flex items-start cursor-pointer flex-shrink-0">
                    <input
                        type="checkbox"
                        className="peer appearance-none w-4 h-4 sm:w-5 sm:h-5 border border-[#00B0FF] rounded-[4px] checked:bg-[#00B0FF] checked:border-[#00B0FF] transition-colors duration-200 mt-[2px]"
                        style={{ minWidth: 16, minHeight: 16 }}
                    />
                    <span className="absolute w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center pointer-events-none mt-[2px]">
                        <svg
                            width="10"
                            height="8"
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 7.02357L3.48692 8.84946C3.64566 8.96596 3.84425 9.01793 4.0412 8.9945C4.23815 8.97107 4.41824 8.87405 4.54385 8.72372L11 1"
                                stroke="white"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </label>
                <p className="text-[10px] sm:text-[12px] text-[#9A9A9A] leading-tight">
                    {
                        'Я согласен на обработку персональных данных в соответствии с политикой обработки персональных данных компании'
                    }
                </p>
            </div>
            <Button text="Оформить заказ" isFullWidth onClick={() => {}} />
        </div>
    );
};

export default RightSideOfOrder;
