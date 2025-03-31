import React from 'react'

const CheckBox = ({selected, handleSelect}) => {

  return (
    <div className={`check-box-0 ${selected ? 'sel': ''}`}>
        <div className={`active ${!selected ? 'hidden': ''}`}></div>
    </div>
  )
}

export default CheckBox