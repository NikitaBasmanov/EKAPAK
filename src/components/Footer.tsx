import logo from '../assets/logoForFooter.png';
import { MailIcon, PointerIcon, ClockIcon } from '../utils/svg';
import logoWhatsapp from '../assets/whatsapp.png';
import logoTelegram from '../assets/telegramm.png';
import Button from './Button';

const Footer = () => {
    return (
        <footer className="w-full bg-white flex flex-col items-center justify-center mt-[20px] sm:mt-[35px]">
            <div className="max-w-[1440px] p-[20px] sm:p-[40px] flex flex-col items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-[30px] sm:mb-[40px] gap-[20px] lg:gap-0">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[20px] sm:gap-[50px] lg:gap-[100px]">
                        <img
                            className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[98px] lg:h-[99px]"
                            src={logo}
                            alt="logo"
                        />
                        <div className="flex flex-col items-start justify-between h-full gap-[15px] sm:gap-[20px]">
                            <div className="flex flex-row items-center justify-center gap-[6px] sm:gap-[8px]">
                                <PointerIcon />
                                <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
                                    г. Екатеринбург, ул. Старых Большевиков,
                                    2А/2
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[8px] sm:gap-[10px]">
                                <ClockIcon />
                                <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
                                    Ежедневно с 9:00 до 21:00
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-center gap-[8px] sm:gap-[10px]">
                                <MailIcon />
                                <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
                                    info@ekapak.ru
                                </p>
                                <img
                                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                                    src={logoWhatsapp}
                                    alt="logo"
                                />
                                <img
                                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                                    src={logoTelegram}
                                    alt="logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[20px] sm:gap-[30px]">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-[5px] sm:gap-[10px]">
                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
                                +7 (906) 813-97-77
                            </p>
                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
                                +7 (906) 813-63-33
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                            <Button
                                text="Перезвоните мне"
                                onClick={() => {}}
                                isInverted
                            />
                            <Button
                                text="Заказать образец"
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <hr className="w-full border-[#D4D4D4]" />
                <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-[15px] sm:gap-[10px] mt-[20px] sm:mt-[40px]">
                    <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#9A9A9A] text-center sm:text-left">
                        Copyright © 2015-2025 ЕКАПАК — производство вакуумной и
                        полиэтиленовой упаковки
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[8px] sm:gap-[10px]">
                        <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#2C2C2C]">
                            Публичная оферта
                        </p>
                        <p className="text-[10px] sm:text-[12px] lg:text-[14px] text-[#2C2C2C]">
                            Политика конфиденциальности
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
