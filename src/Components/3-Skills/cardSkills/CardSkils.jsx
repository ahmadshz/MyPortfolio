/* eslint-disable react/prop-types */

import './Cardskills.css'

const CardSkils = ({ icon, title,isActive,onClick }) => {
    
    return (
        <div className={`skills ${isActive ? 'active' : '' }`}
        onClick={() => onClick()}
        >
            <img src={icon} className='icon' />
            <h2 className='title'>{title}</h2>
        </div>
    )
}

export default CardSkils
