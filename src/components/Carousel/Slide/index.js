import React from 'react'

import car1 from '../../images/lamborghini1.png'
import car2 from '../../images/maserati.png'
import car3 from '../../images/dodge-charger.png'
import car4 from '../../images/lamborghini4.png'

import './styles.scss'



export default function Slide() {
    return (
        <div className="slide">
            <h1></h1>
            <img src={car4} alt="Car" />
            <div className="car-info">
                <div className="info">
                    <p>Aceleração de 0 a 100 km/h: 3 segundos</p>
                    <p>Dimensões: 4797 mm C x 2030 mm L x 1136 mm A</p>
                </div>
                <div className="info">
                    <p>Velocidade máx: 351 km/h</p>
                    <p>Potência: </p>
                    <p>Motor: </p>
                </div>
            </div>
        </div>
    )
}
