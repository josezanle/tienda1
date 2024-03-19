import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { closeModal, openModal } from '@/app/store/modalSlice';
import { Icon } from '../icons'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const handleOpenModal = () => dispatch(openModal())

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 60) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar__content ${isSticky ? "sticky" : ""}`}>
            <div className="left__navbar">
                <h1 className='name__example'>Tu Logo</h1>
            </div>

            <div className="mid__navbar">
                <h3 className='link'>Hombre</h3>
                <h3 className='link'>Mujer</h3>
                <h3 className='link'>Niños</h3>
                <h3 className='link'>Jovenes</h3>
            </div>

            <div className="right__navbar">
                <h3 className='login'>Login</h3>
                {
                    cart?.items?.length > 0
                        ? <span className="cart__box"><Icon name='cart' fill='#1c1c1c' onClick={handleOpenModal} /></span>
                        : <Icon name='cart' fill='#1c1c1c' />
                }

            </div>

            <style jsx>{`
            .navbar__content {
                width: 100%;
                padding: 0 3em;
                height: 80px;
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: white;
                z-index: 100;
            }

            .navbar__content .left__navbar,
            .navbar__content .mid__navbar,
            .navbar__content .right__navbar {
                width: 30%;
                height: 100%;
            }

            .navbar__content .left__navbar {
                display: flex;
                align-items: center;
            }
            .navbar__content .left__navbar .name__example {
                font-family: "Macondo", cursive;
                color: #aede6f;
                font-size: 2em;
                font-weight: bold;
            }

            .navbar__content .mid__navbar{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }
            .navbar__content .mid__navbar .link{
                font-size: 1.5em;
                cursor: pointer;
            }
            .navbar__content .mid__navbar .link:hover{color: #aede6f}

            .navbar__content .right__navbar {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 10px
            }
            .navbar__content .right__navbar .login {
                font-weight: 400;
                cursor: pointer;
            }
            .navbar__content .right__navbar .cart__box {
                position: relative;
            }
            .navbar__content .right__navbar .cart__box:after {
                position: absolute;
                right: 0px;
                top: -10px;
                width: 15px;
                height: 15px;
                background: #aede6f;
                content: "";
                border-radius: 50%;
            }
            .navbar__content .right__navbar .login:hover {color: #aede6f}

            @media screen and (max-width: 800px) {.navbar__content {display: none}}

            `}</style>
        </div>
    )
}

export default Navbar