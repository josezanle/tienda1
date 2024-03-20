import React from 'react';
import { Icon } from '../icons';

const CartModal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="close__button"><Icon name='close' onClick={onClose} /></div>
                <h2>{title}</h2>
                {children}
            </div>

            <style jsx>{`
                .modal-overlay {
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

                .modal-content {
                    width: 900px;
                    height: 60%;
                    background: #fff;
                    padding: 1em;
                    border-radius: 1em;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
                    z-index: 3000;
                }

                .close__button {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 2em;
                }

                @media (max-width: 970px) {
                    .modal-overlay {padding: 0 2em}
                }
      `}</style>
        </div>
    );
};

export default CartModal;
