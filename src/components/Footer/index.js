import React from 'react'
import {
    Facebook, Instagram, YouTube,
    Phone, PhoneAndroid, Copyright
} from '@material-ui/icons'

import './styles.scss'

export default function Footer() {
    return (
        <div id="contato" className="footer-container">
            <div className="info-wrapper">.
                <div className="footer-content-wrapper soc-media">
                    <h3>Redes sociais</h3>
                    <span ><Facebook />Facebook</span>
                    <span ><Instagram />Instagram</span>
                    <span ><YouTube />YouTube</span>
                </div>
                <div className="footer-content-wrapper">
                    <h3>Contato</h3>
                    <span><Phone />(11) 4002-8922</span>
                    <span><PhoneAndroid />(67) 99999-8999</span>
                </div>
                <div className="footer-content-wrapper">
                    <h3>Endereço</h3>
                    <span>Rua X da Silveira, 1178, Santos Dumont</span>
                    <span>Campo Grande - MS</span>
                </div>
            </div>
            <span id="all-rights">Todos os direitos reservados <Copyright /></span>
        </div>
    )
}
