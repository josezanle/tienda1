import React from 'react';
import { Icon } from '../icons';

const CartModal = ({ title, onClose, isOpen, children, handleClearCart }) => {
    if (!isOpen) return null;

    return (
        <div className="modal__overlay">
            <div className="modal__content">
                <div className="top__modal__content">
                    <h2>{title}</h2>
                    <Icon name='close' onClick={onClose} />
                </div>

                <div className="main__modal__content">{children}</div>

                <div className="bottom__modal__content">
                    <button className="pay___button">Pagar</button>
                    <button className="clearCart___button" onClick={handleClearCart}>Vaciar carrito</button>
                </div>
            </div>

            <style jsx>{`
                .modal__overlay {
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 3000
                }

                .modal__overlay .modal__content {
                    width: 900px;
                    height: 60%;
                    background: #fff;
                    padding: 1em;
                    border-radius: 1em;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
                    z-index: 3000;
                    display: flex;
                    flex-flow: column;
                }
                .modal__overlay .modal__content .top__modal__content{
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                }
                .modal__overlay .modal__content .main__modal__content{
                    flex: 8;
                    overflow-y: auto;
                }
                .modal__overlay .modal__content .bottom__modal__content{
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 2em;
                }
                .modal__overlay .modal__content .bottom__modal__content .pay___button{
                    background: black;
                    width: 80px;
                    height: 30px;
                    padding: 3px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                    color: white;
                }
                .modal__overlay .modal__content .bottom__modal__content .clearCart___button{
                    background: white;
                    color: black;
                    height: 30px;
                    padding: 0 5px;
                    border-radius: 5px;
                    border: 1px solid black;
                    cursor: pointer
                }
                @media (max-width: 970px) {.modal-overlay {padding: 0 2em}}
                @media (max-width: 600px) {.modal-overlay {padding: 0 1em}}
      `}</style>
        </div>
    );
};

export default CartModal;
