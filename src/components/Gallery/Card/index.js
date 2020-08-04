import React, { useState } from 'react'

import { Favorite } from '@material-ui/icons'
import car from '../../../images/lamborghini3.png'

import './styles.scss'

export default function Card() {

    const [color, setColor] = useState('whitesmoke')

    return (
        <div className="card-wrapper">
            <img src={car} alt="Car" />
            <div className="car-name-container">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>Lamborghini Aventador</h2>
                    <p>R$ 900.000,00</p>
                </div>
                {/* <Favorite onClick={(e) => toogleFavorite(e)} style={{ color: 'whitesmoke' }} /> */}
                <Favorite onClick={
                    () => setColor(color === 'red' ? 'whitesmoke' : 'red')
                } style={{ color: color, cursor: 'pointer'}} />
            </div>
        </div>
    )
}
