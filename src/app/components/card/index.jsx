import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '@/app/store/cartSlice';

const Card = ({ item, showGalleryMode }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  const addToCart = (item, quantity) => {
    const productWithQuantity = { ...item, quantity }; // Agregar la cantidad al objeto del producto
    dispatch(addProductToCart(productWithQuantity));
  };

  return (
    <div className={showGalleryMode === "normal" ? "card__normalMode" : "card__listMode"}>
      <div className="top">
        <img src={item?.image} alt="" />
      </div>

      <div className="bottom">
        <div className="text__content">
          <h4 className='card__title'>{item.title}</h4>
          <p className='card__desc'>{item.description}</p>
        </div>

        <div className="price__content">
          <h6 className='item__price'>{item.price}$ USD</h6>

          <div className="quantity__ctrls">
            <button onClick={handleDecrement}>-</button>
            <b>{quantity}</b>
            <button onClick={handleIncrement}>+</button>
          </div>

        </div>
        <button className="addCart__btn" onClick={() => addToCart(item, quantity)}>Añadir</button>

      </div>

      <style jsx>{`

      .card__normalMode {
          width: 100%;
          height: 600px;
          border-radius: 1em;
          cursor: pointer;
      }
      .card__normalMode .top {
          width: 100%;
          margin-bottom: .5em;
          height: 60%;
      }

      .card__normalMode .top img {
          width: 100%;
          height: 100%;
          border-radius: .5em;
      }

      .card__normalMode .bottom {
          width: 100%;
          height: 40%;
      }
      .card__normalMode .bottom .text__content {
        display: flex;
        flex-flow: column;  

      }

      .card__normalMode .bottom .text__content .card__title {
          font-size: 2em;
          font-weight: 600;
          color: grey;
      }

      .card__normalMode .bottom .text__content .card__desc {
          font-size: 2em;
          font-weight: 300;
          color: grey;
          margin-bottom: .5em;
      }

      .card__normalMode .bottom .price__content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }

      .card__normalMode .bottom .price__content .item__price {
          font-size: 1.5em;
          display: flex;
          align-items: center;
      }

      .card__normalMode .bottom .price__content .quantity__ctrls {
          display: flex;
          align-items: center;
          gap: 10px;
      }

      .card__normalMode .bottom .price__content .quantity__ctrls button {
          width: 25px;
          height: 25px;
          text-align: center;
          background: #000;
          color: white;
          font-weight: bold;
          border: none;
          outline: none;
          border-radius: 5px;
          cursor: pointer;
      }
      .card__normalMode .bottom .addCart__btn {
          text-align: center;
          width: 100%;
          background: #000;
          color: white;
          font-weight: bold;
          border: none;
          outline: none;
          font-size: 20px;
          border-radius: 5px;
          padding: 5px;
          margin: 10px 0;
          cursor: pointer;
      }

      {/* ----------------------------------- */}
      {/* -------------LIST MODE------------- */}

      .card__listMode {
          width: 100%;
          height: 100px;
          border-radius: .5em;
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 1em;
          gap: 1em;
          transition: background-color 0.3s; 
      }
      .card__listMode:hover {
        background: hsla(0, 0%, 94%, 0.3);
      }

      .card__listMode .top {
          width: 80px;
          height: 80px;
          border-radius: .5em;
      }

      .card__listMode .top img {
          width: 100%;
          height: 100%;
          border-radius: .5em;
      }

      .card__listMode .bottom {
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      .card__listMode .bottom .text__content {
          height: 80px;
          display: flex;
          flex-flow: column;
          justify-content: center;
      }

      .card__listMode .bottom .card__title {
          font-size: 2em;
          font-weight: 600;
          color: grey;
          width: 100%;
      }

      .card__listMode .bottom .card__desc {
          font-size: 1.5em;
          font-weight: 300;
          color: grey;
          width: 100%;
      }

      .card__listMode .bottom .price__content {
          width: 80px;
          height: 80px;
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
      }

      .card__listMode .bottom .price__content .item__price {
          display: flex;
          align-items: center;
          font-size: 1em;
      }

      .card__listMode .bottom .price__content .quantity__ctrls {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
      }

      .card__listMode .bottom .price__content .quantity__ctrls button {
          width: 100%;
          padding: 5px 0;
          text-align: center;
          background: #000;
          color: white;
          font-weight: bold;
          border: none;
          outline: none;
          border-radius: 5px;
          cursor: pointer;
      }
      .card__listMode .bottom .addCart__btn {
          text-align: center;
          background: #000;
          color: white;
          font-weight: bold;
          border: none;
          outline: none;
          border-radius: 5px;
          cursor: pointer;
          height: 35px;
          width: 60px;
      }




      `}</style>

    </div>
  );
};

export default Card;
