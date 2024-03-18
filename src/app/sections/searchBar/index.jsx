import React from 'react'

import './index.css'
import { Icon } from '@/app/components/icons'

const SearchBar = ({ OntoggleModeView, showGalleryMode }) => {

    return (
        <div className='searchBar__container'>
            <div className="search__input">
                <input type="text" />
            </div>

            <div className="mode__items__view">
                <div className="item" style={{border: showGalleryMode === "list" ? "2px solid #aede6f" : "2px solid silver"}}>
                    <Icon
                        name='grid-list'
                        fill={ showGalleryMode === "list" ? "#aede6f" : "silver"}
                        onClick={() => OntoggleModeView("list")}
                    />
                </div>

                <div className="item" style={{border: showGalleryMode === "normal" ? "2px solid #aede6f" : "2px solid silver"}}>
                    <Icon
                        name='grid-images'
                        fill={ showGalleryMode === "normal" ? "#aede6f" : "silver"}
                        onClick={() => OntoggleModeView("normal")}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar