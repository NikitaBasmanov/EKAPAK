import {
    MailIcon,
    PointerIcon,
    CatalogIcon,
    ProfileIcon,
    FavoriteIcon,
    CartIcon,
    CalculatorIcon,
} from '../utils/svg';
import { useNavigate } from 'react-router-dom';
import logoWhatsapp from '../assets/whatsapp.png';
import logoTelegram from '../assets/telegramm.png';
import logo from '../assets/logo.png';
import Button from './Button';

const buttons = [
    {
        href: '/',
        icon: <ProfileIcon />,
        text: 'Профиль',
    },
    {
        href: '/',
        icon: <FavoriteIcon />,
        text: 'Избранное',
    },

    {
        href: '/cart',
        icon: <CartIcon />,
        text: 'Корзина',
    },
];

const delivery = [
    'Доставка',
    'Оплата',
    'Скидки',
    'О компании',
    'Отзывы',
    'Статьи',
    'Вопросы',
    'Контакты',
];

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="w-full flex flex-col items-center mb-[30px] sm:mb-[50px] bg-white rounded-[10px] sm:rounded-[20px] justify-between px-[15px] sm:px-[30px] py-[15px] sm:py-[20px]">
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between pb-[15px] sm:pb-[20px] gap-[10px] lg:gap-0">
                <div className="flex flex-row items-center gap-[6px] sm:gap-[8px] lg:gap-[10px] min-w-0">
                    <PointerIcon />
                    <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#2C2C2C] truncate">
                        г. Екатеринбург, ул. Старых Большевиков, 2А/2
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[6px] sm:gap-[12px] lg:gap-[16px] min-w-0">
                    <div className="flex flex-row items-center gap-[6px] sm:gap-[8px] lg:gap-[10px]">
                        <MailIcon />
                        <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#2C2C2C]">
                            info@ekapak.ru
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-[6px] sm:gap-[8px] lg:gap-[12px] flex-wrap">
                        <img
                            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]"
                            src={logoWhatsapp}
                            alt="logo"
                        />
                        <img
                            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]"
                            src={logoTelegram}
                            alt="logo"
                        />
                        <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-bold text-[#2C2C2C] whitespace-nowrap">
                            +7 (906) 813-97-77
                        </p>
                        <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-bold text-[#2C2C2C] whitespace-nowrap">
                            +7 (906) 813-63-33
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full gap-[15px] lg:gap-0">
                <div className="flex flex-row items-center gap-[10px] sm:gap-[15px] lg:gap-[20px] xl:gap-[30px] w-full lg:w-auto min-w-0">
                    <img
                        className="w-[100px] sm:w-[120px] lg:w-[140px] xl:w-[153px] h-[12px] sm:h-[15px] lg:h-[17px] xl:h-[19px] flex-shrink-0"
                        src={logo}
                        alt="logo"
                    />
                    <div className="flex flex-row items-center gap-[6px] sm:gap-[8px] lg:gap-[10px] px-[12px] sm:px-[15px] lg:px-[20px] py-[8px] sm:py-[10px] lg:py-[14px] bg-[#F5F7FB] rounded-[6px] sm:rounded-[8px] lg:rounded-[10px]">
                        <CatalogIcon />
                        <h1 className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] font-bold text-[#2C2C2C] whitespace-nowrap">
                            Каталог
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-[8px] sm:gap-[10px] lg:gap-[20px] w-full lg:w-auto">
                    <input
                        className="px-[12px] sm:px-[15px] lg:px-[20px] py-[10px] sm:py-[12px] lg:py-[15px] bg-white border border-[#D4D4D4] rounded-[6px] sm:rounded-[8px] lg:rounded-[10px] w-full lg:w-[250px] min-w-0 flex-shrink"
                        placeholder="Поиск"
                        style={{ flex: '1 1 0%', maxWidth: '100%' }}
                    />
                    <div className="hidden sm:flex flex-row items-center gap-[10px] sm:gap-[15px] lg:gap-[30px]">
                        {buttons.map((button) => (
                            <div
                                onClick={() => navigate(button.href)}
                                key={button.text}
                                className="flex flex-col items-center gap-[4px] sm:gap-[5px] lg:gap-[10px] cursor-pointer"
                            >
                                {button.icon}
                                <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#2C2C2C]">
                                    {button.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <Button text="Заказать образец" onClick={() => {}} />
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between pt-[10px] gap-[10px] sm:gap-0">
                <div className="flex flex-wrap items-center gap-[10px] sm:gap-[15px] lg:gap-[20px]">
                    {delivery.map((item) => (
                        <p
                            key={item}
                            className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#2C2C2C]"
                        >
                            {item}
                        </p>
                    ))}
                </div>
                <button className="px-[20px] sm:px-[25px] lg:px-[33px] py-[8px] sm:py-[10px] bg-white border border-[#D4D4D4] cursor-pointer rounded-[8px] sm:rounded-[10px] flex flex-row items-center gap-[8px] sm:gap-[10px]">
                    <CalculatorIcon />
                    <p className="text-[12px] sm:text-[14px] lg:text-[18px] text-[#2C2C2C]">
                        Калькулятор
                    </p>
                </button>
            </div>
        </header>
    );
};

export default Header;
