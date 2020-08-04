import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

import './styles.scss'

export default function SkelletonGallery() {

    function Card() {
        return (
            <div className="card-wrapper">
                <Skeleton animation="wave" variant="rect" width="100%" height="70%" />
                <div className="car-info">
                <Skeleton animation="wave" variant="rect" style={{borderRadius:10}} width="80%" height="10%" />
                <Skeleton animation="wave" variant="rect" style={{borderRadius:10}} width="50%" height="10%" />
                </div>
            </div>
        )
    }

    return (
        <>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </>
    )
}
