// src/components/Modal.js
import React from 'react';

const CartModal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{title}</h2>
                {children}
                <button onClick={onClose} className="close-button">
                    Cerrar
                </button>
            </div>

            <style jsx>{`
                .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                }

                .modal-content {
                background: #fff;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .close-button {
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                background: #ccc;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                }
      `}</style>
        </div>
    );
};

export default CartModal;
