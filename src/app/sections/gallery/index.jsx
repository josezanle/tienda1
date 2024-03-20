import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// dispatchers
import { closeModal, openModal } from '@/app/store/modalSlice';
import { clearCart, removeProductFromCart, selectCartTotal } from '@/app/store/cartSlice';

// ui
import SearchBar from '../searchBar';
import Card from '@/app/components/card';
import { Br } from '@/app/components/br';
import CartModal from '@/app/components/modal';

import './index.css'

const ITEMS = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/8268989/pexels-photo-8268989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Modelo 1",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/12368205/pexels-photo-12368205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Modelo 2",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Modelo 3",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Modelo 4",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/6484027/pexels-photo-6484027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Modelo 5",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 6,
        image: "https://images.pexels.com/photos/16304369/pexels-photo-16304369/free-photo-of-moda-zapatos-estilo-nike.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Modelo 6",
        description: "it is a short description like a short test",
        price: 10
    },
]

const Gallery = () => {
    const dispatch = useDispatch();
    const [showGalleryMode, setshowGalleryMode] = useState("normal")
    const [activeMode, setActiveMode] = useState(true);

    const isModalOpen = useSelector((state) => state.modal.isOpen);
    const cart = useSelector(state => state.cart);
    const cartTotal = useSelector(selectCartTotal);

    const handleOpenModal = () => dispatch(openModal())
    const handleCloseModal = () => dispatch(closeModal())

    const removeFromCart = (product) => dispatch(removeProductFromCart(product));
    const handleClearCart = () => dispatch(clearCart())

    const OntoggleModeView = (mode = "normal") => {
        setshowGalleryMode(mode)
        setActiveMode(!activeMode)
    }

    return (
        <div className='gallery__container'>
            <h2 className='title'>NUEVA TEMPORADA</h2>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, suscipit.</p>

            <Br />

            <SearchBar OntoggleModeView={OntoggleModeView} activeMode={activeMode} showGalleryMode={showGalleryMode} />

            <div className={showGalleryMode === "normal" ? "content__mode__normal" : "content__mode__list"}>
                {ITEMS.map((item) =>
                    <Card
                        key={item.id}
                        item={item}
                        showGalleryMode={showGalleryMode}
                    />
                )}
            </div>

            <h3 className='more'>Ver mas</h3>

            {isModalOpen &&
                <CartModal isOpen={isModalOpen} onClose={handleCloseModal} title="Carrito de compras">
                    <div>
                        {cart?.items?.map((item, i) => {
                            return (
                                <div key={i}>
                                    {item.title} {item.price}$ USD - {item.quantity} unidades = {item.price * item.quantity}$ USD  <button onClick={() => removeFromCart(item?.id)}>Eliminar</button>
                                </div>
                            )
                        })}

                        <h1>Total: ${cartTotal}</h1>

                        <button onClick={handleClearCart}>Vaciar carrito</button>

                    </div>
                </CartModal>
            }
        </div>
    )
}

export default Gallery