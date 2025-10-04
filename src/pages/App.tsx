import testProduct from '../assets/testProduct.png';
import Cart from '../components/Cart';
import { useCategories } from '../utils/api';
import { useState } from 'react';

interface CategoryWithChildren extends Category {
    children: Category[];
}

interface Category {
    uuid: string;
    name: string;
    img_url: string;
}

const products = [
    {
        name: 'Вакуумные пакеты PET/PE металлизированные и еще какая то инфа на 3 строчки',
        price: 15.9,
        image: testProduct,
        isInStock: true,
        artNumber: 1,
        isSelected: false,
        onAddToCart: () => {},
        onRemoveFromCart: () => {},
    },
    {
        name: 'Вакуумные пакеты PET/PE металлизированные и еще какая то инфа на 3 строчки',
        price: 15.9,
        image: testProduct,
        isInStock: true,
        artNumber: 2,

        onAddToCart: () => {},
        onRemoveFromCart: () => {},
    },
    {
        name: 'Вакуумные пакеты PET/PE металлизированные и еще какая то инфа на 3 строчки',
        price: 15.9,
        image: testProduct,
        isInStock: true,
        artNumber: 3,

        onAddToCart: () => {},
        onRemoveFromCart: () => {},
    },
    {
        name: 'Вакуумные пакеты PET/PE металлизированные и еще какая то инфа на 3 строчки',
        price: 15.9,
        image: testProduct,
        isInStock: true,
        artNumber: 4,

        onAddToCart: () => {},
        onRemoveFromCart: () => {},
    },
    {
        name: 'Вакуумные пакеты PET/PE металлизированные и еще какая то инфа на 3 строчки',
        price: 15.9,
        image: testProduct,
        isInStock: true,
        artNumber: 5,

        onAddToCart: () => {},
        onRemoveFromCart: () => {},
    },
];

function App() {
    const { data: categories, isSuccess: isCategoriesSuccess } =
        useCategories();

    const [openSubcategory, setOpenSubcategory] = useState<string | null>(null);

    return (
        <>
            <div className="w-full p-[20px] sm:p-[40px] bg-white rounded-[10px] sm:rounded-[20px] flex flex-col items-start justify-center gap-[15px] sm:gap-[20px]">
                <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold leading-tight">
                    Производство гибкой пластиковой упаковки
                </h1>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
                    По индивидуальным размерам и в минимальные сроки
                </p>
            </div>

            <div className="flex flex-col xl:flex-row w-full items-start justify-center gap-[10px] mt-[10px]">
                <div className="hidden xl:flex p-[20px] sm:p-[30px] lg:p-[40px] w-full xl:min-w-[350px] xl:max-w-[350px] bg-white rounded-[10px] sm:rounded-[20px] flex-col items-start justify-center gap-[15px] sm:gap-[20px]">
                    <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold">
                        Каталог товаров
                    </h2>
                    <div className="flex flex-col w-full items-center justify-between gap-[15px] sm:gap-[20px]">
                        {isCategoriesSuccess &&
                            categories.data?.map(
                                (category: CategoryWithChildren) => (
                                    <div
                                        key={category.uuid}
                                        className="flex items-center justify-between w-full hover:text-[#00B0FF] cursor-pointer relative"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenSubcategory(
                                                openSubcategory ===
                                                    category.uuid
                                                    ? null
                                                    : category.uuid
                                            );
                                        }}
                                    >
                                        <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
                                            {category.name}
                                        </p>
                                        <p className="text-[14px] sm:text-[16px] lg:text-[18px]">
                                            {'>'}
                                        </p>
                                        {openSubcategory === category.uuid && (
                                            <div
                                                className="absolute left-full top-0 z-10 ml-2 flex flex-col items-start justify-center min-w-[200px] bg-white rounded-[10px] sm:rounded-[20px] p-[10px] sm:p-[15px] lg:p-[20px] shadow-lg border border-[#DFDFDF]"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                {category.children?.map(
                                                    (subcategory: Category) => (
                                                        <p
                                                            key={
                                                                subcategory.uuid
                                                            }
                                                            className="py-1 px-2 hover:bg-[#F5F7FB] rounded cursor-pointer"
                                                        >
                                                            {subcategory.name}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                    </div>
                </div>
                <div className="p-[10px] sm:p-[15px] lg:p-[20px] xl:p-[30px] w-full bg-white rounded-[10px] sm:rounded-[20px] flex flex-col items-start justify-center gap-[10px] sm:gap-[15px] lg:gap-[20px]">
                    <div className="grid-responsive w-full">
                        {products.map((product, index) => (
                            <div key={index} className="prevent-overlap">
                                <Cart
                                    product={{ ...product, isInStock: true }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
