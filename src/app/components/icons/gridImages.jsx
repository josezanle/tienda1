import React from 'react'

export const GridImages = ({ size, fill, onClick }) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: size, height: size, fill, cursor: "pointer" }} onClick={onClick}>
            <rect x="48" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            <rect x="288" y="48" width="176" height="176" rx="20" ry="20" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            <rect x="48" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
            <rect x="288" y="288" width="176" height="176" rx="20" ry="20" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </svg>

    )
}