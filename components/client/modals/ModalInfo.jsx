import React from 'react'

const ModalInfo = ({ mainText, active, setActive, type = 'default', closeable = true }) => {

    if (active) {
        return (
            <div className='modal-container' >
                <div className={`modal-warp ${type !== 'default' ? type : ''}`}>
                    <div className="warp-header">
                        <h4>
                            {mainText}
                        </h4>
                    </div>
                    {
                        closeable && (
                            <div className="warp-options">
                                <div className="option-modal info" onClick={() => setActive()}>
                                    Aceptar
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        )
    }
}

export default ModalInfo