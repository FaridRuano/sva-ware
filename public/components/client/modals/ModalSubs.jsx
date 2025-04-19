'use client'
import React from 'react'

const ModalSubs = ({ active, setActive }) => {


    if (active) {
        return (
            <div className='modal-container' >
                <div className="modal-warp extend">
                    <div className="content-row">
                        <div className="col ">
                            <div className="title">
                                <h1>
                                    Mensual
                                </h1>
                                <p>
                                    Se renueva cada mes
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="price tier-btn">
                                <h1>
                                    $29.99
                                </h1>Yo
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-row" id='row2'>
                        <div className="col">
                            <div className="title">
                                <h1>
                                    Trimestral
                                </h1>
                                <p>
                                    Se renueva cada 3 meses
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="save">
                                Paga <b>$24.33</b> por mes
                            </div>
                            <div className="price tier2-btn">
                                <h1>
                                    $72.99
                                </h1>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-row" id='row3'>
                        <div className="col">
                            <div className="title">
                                <h1>
                                    Semestral
                                </h1>
                                <p>
                                    Se renueva cada 6 meses
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="save">
                                Paga <b>$21.16</b> por mes
                            </div>
                            <div className="price tier3-btn">
                                <h1>
                                    $126.99
                                </h1>
                                <p>USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <p>
                            Puedes cancelar en cualquier momento tu suscripción, sin recargos.
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

export default ModalSubs