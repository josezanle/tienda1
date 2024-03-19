import { useState } from "react";
import { Icon } from "../icons";
import Logo from "../logo";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/app/store/modalSlice";

const BurgerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const handleOpenModal = () => dispatch(openModal())

    const toggleNavbar = () => setIsOpen(!isOpen)

    return (
        <nav className="burger__navbar">
            <Logo size="30px" />

            {
                cart?.items?.length > 0
                    ? <span className="cart__box"><Icon name='cart' fill='#1c1c1c' onClick={handleOpenModal} /></span>
                    : <span className="cart__box__empty"><Icon name='cart' fill='#1c1c1c' /></span>
            }

            <Icon name={isOpen === true ? "close" : "burger"} onClick={toggleNavbar} />

            {isOpen &&
                <div className="dropdown__content">
                    <h1>Me</h1>
                    <h1>Me</h1>
                    <h1>Me</h1>
                    <h1>Me</h1>
                    <h1>Me</h1>
                </div>
            }

            <style jsx>{`
                .burger__navbar {
                    width: 100%;
                    height: 60px;
                    background-color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2em;
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    gap: 10px;
                }

                .burger__navbar .dropdown__content {
                    display: none;
                    position: fixed;
                    top: 60px;
                    left: 0;
                    right: 0;
                    width: 100vw;
                    height: 0;
                    background-color: white;
                    z-index: 3000;
                    transition: height 0.3s ease;
                    padding: 2em;
                }

                .burger__navbar .dropdown__content {display: none; height: calc(100vh - 60px)}

                .burger__navbar .cart__box {
                    position: relative;
                    width: 100%;
                    display: none;
                }
                .burger__navbar .cart__box__empty {
                    width: 100%;
                    display: none;
                }
                .burger__navbar .cart__box:after {
                    position: absolute;
                    right: 0px;
                    top: -8px;
                    width: 12px;
                    height: 12px;
                    background: #aede6f;
                    content: "";
                    border-radius: 50%;
                }

                @media screen and (max-width: 800px) {
                    .burger__navbar {display: flex}
                    .burger__navbar .dropdown__content {display: block}
                    .burger__navbar .cart__box {display: flex; justify-content: flex-end}
                    .burger__navbar .cart__box__empty {display: flex; justify-content: flex-end}
                    .burger__navbar .dropdown__content {display: block}
                }
            `}</style>
        </nav>
    );
};

export default BurgerNavbar;

