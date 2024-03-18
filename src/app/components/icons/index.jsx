import React from 'react'

import { Announce } from './announce'
import { Applause } from './applause'
import { ArrowLong } from './arrowLong'
import { World } from './world'
import { Check } from './check'
import { Sms } from './sms'
import { ArrowShortDown } from './arrowShortDown'
import { ArrowShortUp } from './arrowShortUp'
import { Star } from './star'
import { Cart } from './cart'
import { Search } from './search'
import {GridList} from './gridList'
import { GridImages } from './gridImages'

export const Icon = ({ name = "applause", size = 20, fill = "silver", onClick = () => { } }) => {
    switch (name) {
        case "announce":
            return <Announce size={size} fill={fill} onClick={onClick} />

        case "applause":
            return <Applause size={size} fill={fill} onClick={onClick} />

        case "arrow-short-down":
            return <ArrowShortDown size={size} fill={fill} onClick={onClick} />

        case "arrow-short-up":
            return <ArrowShortUp size={size} fill={fill} onClick={onClick} />

        case "arrow-large":
            return <ArrowLong size={size} fill={fill} onClick={onClick} />

        case "cart":
            return <Cart size={size} fill={fill} onClick={onClick} />

        case "check":
            return <Check size={size} fill={fill} onClick={onClick} />

        case "sms":
            return <Sms size={size} fill={fill} onClick={onClick} />

        case "search":
            return <Search size={size} fill={fill} onClick={onClick} />

        case "grid-list":
            return <GridList size={size} fill={fill} onClick={onClick} />

        case "grid-images":
            return <GridImages size={size} fill={fill} onClick={onClick} />

        case "star":
            return <Star size={size} fill={fill} onClick={onClick} />

        case "world":
            return <World size={size} fill={fill} onClick={onClick} />
    }

}