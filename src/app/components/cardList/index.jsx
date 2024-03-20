import React from 'react'

const CardList = ({ item, removeFromCart }) => {
    return (
        <div className="card__list">
            <img className='image__item' src={item?.image} alt="image__item" />

            <div className="left__content">
                <div className="text__content">
                    <h4 className='card__title'>{item.title}</h4>
                    <p className='card__desc'>{item.description}</p>
                    <h6>{item.price}$ USD</h6>
                </div>

                <div className="price__content">
                    <div className="quantity"><em>{item.quantity} unidad</em></div>
                </div>

                <button className="delete__btn" onClick={() => removeFromCart(item?.id)}>Eliminar</button>
            </div>

            <style jsx>{`
                .card__list{
                    width: 100%;
                    height: 80px;
                    margin-bottom: 10px;
                    gap: 10px;
                    display: flex;
                }
                .card__list .image__item{
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                }
                
                .card__list .left__content{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .card__list .left__content .delete__btn{
                    width: 80px;
                    padding: 3px 0;
                    color: white;
                    border-radius: 5px;
                    background: black;
                }

            `}</style>
        </div>
    )
}

export default CardList