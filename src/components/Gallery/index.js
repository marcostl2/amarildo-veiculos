import React, { useEffect, useState } from 'react'

import Card from './Card'

import SkeletonGallery from '../SkeletonGallery'

import './styles.scss'

export default function Gallery() {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaded(true), 6000)
    }, [])

    return (
        <div id="galeria" className="gallery-wrapper">
            <h1>Galeria</h1>
            {
                !loaded ?
                    <SkeletonGallery />
                    :
                    <>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </>
            }
        </div>
    )
}
