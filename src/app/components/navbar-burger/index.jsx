import { useState } from "react";




const BurgerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen)

    return (
        <nav>
            <div className="logo">Logo</div>
            <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
                <li><Link href="/gallery"><a>Gallery</a></Link></li>
            </ul>
            <div className="burger" onClick={toggleNavbar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <style jsx>{`
                nav {
                    background-color: #2196f3;
                    color: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 20px;
                }

                .logo {
                    font-size: 24px;
                    font-weight: bold;
                }

                .nav-links {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }

                .nav-links li {
                    margin-right: 20px;
                }

                .nav-links a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 18px;
                }

                .burger {
                    display: none;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 20px;
                    cursor: pointer;
                }

                .line {
                    width: 100%;
                    height: 3px;
                    background-color: #fff;
                }

                @media screen and (max-width: 800px) {
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                        position: absolute;
                        top: 60px;
                        left: 0;
                        background-color: #2196f3;
                        padding: 10px 0;
                    }

                    .nav-links li {
                        margin: 10px 0;
                    }

                    .burger {
                        display: flex;
                    }
                }
            `}</style>
        </nav>
    );
};

export default BurgerNavbar;


