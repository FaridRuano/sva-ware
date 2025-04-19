import React from 'react'

const ModalInfo = ({ mainText, active, setActive }) => {

    if (active) {
        return (
            <div className='modal-container' >
                <div className="modal-warp">
                    <div className="warp-header">
                        <h4>
                            {mainText}
                        </h4>
                    </div>
                    <div className="warp-options">
                        <div className="option-modal info" onClick={()=>setActive()}>
                            Aceptar
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalInfo