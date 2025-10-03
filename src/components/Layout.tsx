import Header from './Header.tsx';
import Footer from './Footer.tsx';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between bg-[#F5F7FB]">
            <div className="w-full max-w-[1440px] px-[40px] pt-[20px] flex flex-col items-center justify-center">
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
