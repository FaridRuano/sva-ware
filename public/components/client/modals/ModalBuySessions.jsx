'use client'
import { useRouter } from '@node_modules/next/navigation'
import React from 'react'

const ModalBuySessions = ({ active, setActive }) => {

    const router = useRouter()

    if (active) {
        return (
            <div className='modal-container' >
                <div className="modal-warp extend">
                    <div className="content-row" onClick={() => router.push('/client/payments/single/689fcb9fd212f159a2fa0866')}>
                        <div className="col ">
                            <div className="title">
                                <h1>
                                    1 sesión
                                </h1>
                                <p>
                                    Sesión individual de 30 minutos
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="price tier-btn">
                                <h1>
                                    $7.99
                                </h1>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-row" id='row2' onClick={() => router.push('/client/payments/single/689fcb69d212f159a2fa0864')}>
                        <div className="col">
                            <div className="title">
                                <h1>
                                    Pack de 3
                                </h1>
                                <p>
                                    3 sesiones individuales de 30 minutos
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="save">
                                Ahorra <b>$4.00</b>
                            </div>
                            <div className="price tier2-btn">
                                <h1>
                                    $19.99
                                </h1>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-row" id='row3' onClick={() => router.push('/client/payments/single/689fcb16d212f159a2fa0862')}>
                        <div className="col">
                            <div className="title">
                                <h1>
                                    Pack de 5
                                </h1>
                                <p>
                                    5 sesiones individuales de 30 minutos
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="save">
                                Ahorra <b>$10.00</b>
                            </div>
                            <div className="price tier3-btn">
                                <h1>
                                    $29.99
                                </h1>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <p>
                            Las sesiones compradas son válidas por 3 meses a partir de la fecha de compra. Las sesiones no son transferibles y no son reembolsables.
                        </p>
                    </div>
                    <div className="warp-options">
                        <div className="option-modal full" onClick={() => setActive()}>
                            Cerrar
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalBuySessions