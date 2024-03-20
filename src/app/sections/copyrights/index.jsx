import React from 'react'

const Copyrights = () => {
    return (
        <div className='copyrights__section'>
            <div className="content">
                <p className="left">Desarrollado por Zanle Studio</p>
                <p className="mid">All rights reserved 2024</p>
                <p className="right"> Argentina - Perú</p>
            </div>

            <div className="responsive">Zanle Studio 2024 - All rights reserved</div>

            <style jsx>
                {`
                .copyrights__section {
                    max-width: 100vw;
                    padding: 1em 2em; 
                    display: flex;
                    justify-content: center;
                    background-color: white;
                }
                .copyrights__section .responsive {display: none}
                .copyrights__section .content {
                    width: 2000px;
                    display: flex;
                    flex-flow: row;
                    justify-content: space-between;
                    color: black
                }

                .copyrights__section .left,
                .copyrights__section .mid,
                .copyrights__section .right {
                    color: black;
                    font-weight: bold;
                    font-size: 20px;
                }

                @media (max-width: 1280px) {.copyrights__section .content {width: 100%, padding: 0 2em}}
                @media (max-width: 850px) {
                    .copyrights__section .content {display: none}
                    .copyrights__section .responsive {display: block; color: black}
                }
            `}
            </style>
        </div>
    )
}

export default Copyrights