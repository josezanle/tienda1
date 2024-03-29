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
          <h4 className='item__price'>{item.price}$ USD</h4>

          <div className="quantity__ctrls">
            <button onClick={handleDecrement}>-</button>
            <b>{quantity}</b>
            <button onClick={handleIncrement}>+</button>
          </div>

          <button className="addCart__btn__responsive" onClick={() => addToCart(item, quantity)}>Añadir</button>
        </div>

        <button className="addCart__btn" onClick={() => addToCart(item, quantity)}>Añadir</button>
      </div>

      <style jsx>{`

      .card__normalMode {
          width: 290px;
          height: 400px;
          border-radius: 1em;
          cursor: pointer;
      }
      .card__normalMode .top {
          width: 100%;
          height: 200px;
      }

      .card__normalMode .top img {
          width: 100%;
          height: 100%;
          border-radius: .5em;
      }

      .card__normalMode .bottom {
          width: 100%;
          height: 200px;
          padding-top: 1em;
      }
      .card__normalMode .bottom .text__content {
          display: flex;
          flex-flow: column;  
      }

      .card__normalMode .bottom .text__content .card__title {
          font-size: 1em;
          font-weight: 500;
          color: #eaad51
      }

      .card__normalMode .bottom .text__content .card__desc {
          color: grey;
          margin-bottom: .5em;
      }

      .card__normalMode .bottom .price__content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: grey;
      }

      .card__normalMode .bottom .price__content .item__price {
          font-size: 1em;
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
          font-size: 1.3em;
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

      .card__normalMode .bottom .price__content .addCart__btn__responsive {display: none}
      .card__listMode .bottom .price__content .addCart__btn__responsive {
          display: none;
          text-align: center;
          background: #000;
          color: white;
          font-weight: 500;
          border: none;
          outline: none;
          font-size: 14px;
          border-radius: 5px;
          padding: 5px;
          margin: 0;
          cursor: none;
        }
      .card__listMode {
          width: 100%;
          height: 100px;
          border-radius: .5em;
          display: flex;
          align-items: center;
          cursor: pointer;
          gap: 1em;
          transition: background-color 0.3s; 
      }
      .card__listMode:hover {
        background: hsla(0, 0%, 94%, 0.5);
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
          justify-content: center;
          flex-flow: column;
      }

      .card__listMode .bottom .card__title {
          font-size: 1.3em;
          font-weight: 500;
          color: #1c1c1c;
          width: 100%;
      }

      .card__listMode .bottom .card__desc {
          font-size: 1em;
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
          font-weight: bold;
      }

      .card__listMode .bottom .price__content .quantity__ctrls button {
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
          font-size: 1.3em;
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

      @media (max-width: 700px) {
        .card__normalMode .bottom .text__content .card__title,
        .card__listMode .bottom .card__title{font-size: 1.5em}

        .card__normalMode .bottom .text__content .card__desc,
        .card__listMode .bottom .card__desc {font-size: 1.2em}
      }

      @media (max-width: 560px) {
        .card__listMode {width: 100%; gap: .5em}
        .card__listMode .bottom .card__title {font-size: 16px; font-weight: 600}
        .card__listMode .bottom .card__desc {font-size: 14px}
        .card__listMode .bottom .price__content {
            width: 100%;
            flex-flow: row;
            align-items: center;
            justify-content: space-between;
            gap: 0;
        }
        .card__listMode .bottom {
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: start;
            align-items: start;
        }
        .card__listMode .bottom .price__content .quantity__ctrls {
            width: auto;
            display: flex;
            gap: 7px;
        }
       
        .card__listMode .bottom .price__content .quantity__ctrls button {
            width: 20px;
            height: 20px;
            font-weight: 600;
            cursor: none;
            font-size: 1em;
        }
        .card__listMode .bottom .price__content .addCart__btn__responsive {display: block}
        .card__listMode .bottom .addCart__btn {display: none}
}

      @media (max-width: 400px) {
        .card__normalMode {
          width: 100%;
          margin-bottom: 2em;
        }
      }
`}</style>

    </div>
  );
};

export default Card;
