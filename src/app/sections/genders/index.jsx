import React from 'react'
import './index.css'

const images = [
    {
        img: "https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "HOMBRE"
    },
    {
        img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "MUJER"
    },
    {
        img: "https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "NIÑOS"
    },
]

const Card = ({ item }) => {
    return (
        <div
            className='card'
            style={{
                backgroundImage: `url(${item.img} )`,
                backgroundSize:"cover"
            }}
        >
            <button>
                {item.name}
            </button>
        </div>
    )
}

const Genders = () => {
    return (
        <div className='genders__container'>
            {images.map((item, i) => <Card item={item} key={i} />)}
        </div>
    )
}

export default Genders