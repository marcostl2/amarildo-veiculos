import React, { useState } from 'react'

import car1 from '../../images/lamborghini1.png'
import car2 from '../../images/maserati.png'
import car3 from '../../images/dodge-charger.png'
import car4 from '../../images/lamborghini4.png'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

import './styles.scss'

const carsArray = [car1, car2, car3, car4]

const cars = [
  {
    id: 0,
    name: 'Lamborghini Aventador',
    speed: '3',
    dimension: {
      carLength: 4797,
      width: 2030,
      height: 1136
    },
    maxSpeed: 351,
    power: '740/770 HP',
    motor: '6,5 l V12',
    // get img(){return carsArray[this.id]}
  },
  {
    id: 1,
    name: 'Maserati Ghibli S Q4 3.0 V6',
    speed: '4,8',
    dimension: {
      carLength: 4971,
      width: 1945,
      height: 1461
    },
    maxSpeed: 284,
    power: '4,56 kg/cv',
    motor: 'V6'
  },
  {
    id: 2,
    name: 'Dodge Charger Hellcat 6.2 V8',
    speed: '3,7',
    dimension: {
      carLength: 5100,
      width: 1905,
      height: 1480
    },
    maxSpeed: 328,
    power: '2,89 kg/cv',
    motor: 'V8'
  },
  {
    id: 3,
    name: 'Lamborghini Aventador',
    speed: '3',
    dimension: {
      carLength: 4797,
      width: 2030,
      height: 1136
    },
    maxSpeed: 351,
    power: '740/770 HP',
    motor: '6,5 l V12'
  }
]

export default function Carousel({ mobileScreen }) {

  const [car, setCar] = useState(cars[0])

  // function moveSlider(direction) {
  //   let container = document.querySelector('.slidershow')
  //   let vSize = document.querySelector('.slidershow').clientWidth
  //   if (direction === 'right') {
  //     let count = 0
  //     setInterval(function () {
  //       if (count < vSize) {
  //         container.scrollLeft += 30;
  //         count += 30
  //       }
  //     }, 10)
  //   } else {
  //     let count = vSize
  //     setInterval(function () {
  //       if (count > 0) {
  //         container.scrollLeft -= 30;
  //         count -= 30
  //       }
  //     }, 10)
  //   }
  // }

  function handleSlider(direction) {
    if (direction === 'left') {
      if (car.id !== 0) {
        setCar(cars[car.id - 1])
      }
    } else if (direction === 'right') {
      if (car.id !== carsArray.length - 1) {
        setCar(cars[car.id + 1])
      }
    }
  }

  function Slider({ car }) {
    return (
      <div className="slide scale-up-center">
        <h1>{`${car.name}`}</h1>
        <img src={carsArray[car.id]} alt="Car" />
        <div className="car-info">
          <div className="info">
            <p>{`Aceleração de 0 a 100 km/h: ${car.speed} segundos`}</p>
            <p>
              {`Dimensões: 
                        ${car.dimension.carLength} mm C x 
                        ${car.dimension.width} mm L x ${car.dimension.height} mm A`}
            </p>
          </div>
          <div className="info">
            <p>{`Velocidade máx: ${car.maxSpeed} km/h`}</p>
            <p>{`Potência: ${car.power}`}</p>
            <p>{`Motor: ${car.motor}`}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="home" className="slider-wrapper">
      {!mobileScreen ?
        (<div onClick={() => handleSlider('left')} className="arrow-left arrow-wrapper">
          <ArrowBackIos style={{ fontSize: 34 }} />
        </div>)
        : <></>
      }
      {mobileScreen ?
        cars.map(car => (
          <Slider key={car} car={car} />
        ))
        :
        <Slider car={car} />
      }
      {!mobileScreen ?
        <div onClick={() => handleSlider('right')} className="arrow-right arrow-wrapper">
          <ArrowForwardIos style={{ fontSize: 34 }} />
        </div>
        : <></>
      }

      {/* <div className="slidershow"> */}

      {/* <div className="slide s1">
                    <h1></h1>
                    <img src={car1} alt="Car" />
                    <div className="car-info">
                      <div className="info">
                        <p>Aceleração de 0 a 100 km/h: 3 segundos</p>
                        <p>Dimensões: 4797 mm C x 2030 mm L x 1136 mm A</p>
                      </div>
                      <div className="info">
                        <p>Velocidade máx: 351 km/h</p>
                        <p>Potência: 740/770 HP</p>
                        <p>Motor: 6,5 l V12</p>
                      </div>
                    </div>
                </div> 
                 <div className="slide s2">
                    <h1></h1>
                    <img src={car2} alt="Car" />
                    <div className="car-info">
                        <div className="info">
                        <p>Aceleração de 0 a 100 km/h:  segundos</p>
                        <p>Dimensões: 4971 mm C x 1945 mm L x 1461 mm A</p>
                        </div>
                      <div className="info">
                        <p>Velocidade máx: km/h</p>
                        <p>Potência: </p>
                        <p>Motor: </p>
                      </div>
                    </div>
                </div>  */}
      {/* //         <div className="slide s3">
        //             <h1></h1>
        //             <img src={car3} alt="Car" />
        //             <div className="car-info">
        //                 <div className="info">
        //                 <p>Aceleração de 0 a 100 km/h:  segundos</p>
        //                 <p>Dimensões:  mm C x 1905 mm L x 1480 mm A</p>
        //                 </div>
        //             <div className="info">
        //                 <p>Velocidade máx: 328 km/h</p>
        //                 <p>Potência: </p>
        //                 <p>Motor: </p>
        //             </div>
        //             </div>
        //         </div> */}


      {/* /* //     </div> */}

    </div>
  )
}
