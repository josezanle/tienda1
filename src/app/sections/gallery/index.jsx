import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../searchBar';
import Card from '@/app/components/card';
import { Br } from '@/app/components/br';
// import CartModal from '@/app/components/modal';
// import { closeModal, openModal } from '@/app/store/modalSlice';

import './index.css'

const ITEMS = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/8268989/pexels-photo-8268989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Some dressing clothes",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/12368205/pexels-photo-12368205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Some dressing clothes",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Some dressing clothes",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 4,
        image: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Some dressing clothes",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 5,
        image: "https://images.pexels.com/photos/6484027/pexels-photo-6484027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Some dressing clothes",
        description: "it is a short description like a short test",
        price: 10
    },
    {
        id: 6,
        image: "https://images.pexels.com/photos/16304369/pexels-photo-16304369/free-photo-of-moda-zapatos-estilo-nike.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Some dressing clothes",
        description: "it is a short description like a short test",
        price: 10
    },
]

const Gallery = () => {
    const [cart, setCart] = useState([]);
    const [showGalleryMode, setshowGalleryMode] = useState("normal")
    const [activeMode, setActiveMode] = useState(true);

    // const dispatch = useDispatch();
    // const isModalOpen = useSelector((state) => state.modal.isOpen);

    // const handleOpenModal = () => dispatch(openModal())
    // const handleCloseModal = () => dispatch(closeModal())

    const addToCart = (item, quantity) => {
        // Verifica si el artículo ya está en el carrito
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // Si ya existe, actualiza la cantidad
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
            );
            setCart(updatedCart);
        } else {
            // Si es un artículo nuevo, agrégalo al carrito
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeFromCart = (itemToRemove) => {
        const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
        setCart(updatedCart);
    };

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
                {ITEMS.map((item) => <Card key={item.id} item={item} addToCart={addToCart} showGalleryMode={showGalleryMode} />)}
            </div>

            <h3 className='more'>Ver mas</h3>

            <Br />
            <Br />
            <Br />

            {/* <h3>Artículos en el carrito:</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.title} ({item.quantity} unidades) - {item.price * item.quantity}$ USD - <button onClick={() => removeFromCart(item)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <Br />
            <Br /> */}

            {/* {isModalOpen && <CartModal />} */}


        </div>
    )
}

export default Gallery