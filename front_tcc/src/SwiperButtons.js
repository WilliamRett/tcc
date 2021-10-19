import React from 'react'
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import './SwiperButtons.css';




function SwiperButtons() {
    return (
        <div className="body_buttons">
            <IconButton className="not_like">
                <CloseIcon fontSize="Large" />
            </IconButton>
            <IconButton className="like">
                <FavoriteIcon fontSize="Large" />
            </IconButton>
        </div>
    )
}

export default SwiperButtons
