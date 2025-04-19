'use client'
import React, { useState, useEffect } from 'react'
import { 
  format, 
  set, 
  addMinutes, 
  isBefore, 
  isEqual, 
  startOfDay,
  addHours,
  isSameDay
} from 'date-fns'

/**
 * TimePicker: muestra botones con franjas de 30 minutos para un día dado.
 * Si selectedDate es hoy, solo permite slots cuya hora de inicio esté
 * 4h o más después del momento actual.
 *
 * Props:
 * - selectedDate: Date, día para el que se generan las franjas.
 * - onTimeSelect: función(day: Date) que recibe la fecha+hora de la franja seleccionada.
 * - startTime (opcional): string "HH:mm", hora de inicio (default "10:00").
 * - endTime   (opcional): string "HH:mm", hora de fin (default "22:00").
 */
export default function TimePicker({
  selectedDate,
  onTimeSelect,
  startTime = '10:00',
  endTime   = '22:00'
}) {
  const [slots, setSlots] = useState([])
  const [selectedSlot, setSelectedSlot] = useState(null)

  useEffect(() => {
    if (!selectedDate) {
      setSlots([])
      return
    }

    const base = startOfDay(selectedDate)
    const [sh, sm] = startTime.split(':').map(Number)
    const [eh, em] = endTime.split(':').map(Number)

    // Hora mínima permitida:
    // - Si es hoy, ahora + 4h
    // - Si es otro día, la hora de inicio normal
    const now = new Date()
    const minAllowed = isSameDay(selectedDate, now)
      ? addHours(now, 4)
      : set(base, { hours: sh, minutes: sm, seconds: 0, milliseconds: 0 })

    const limit = set(base, { hours: eh, minutes: em, seconds: 0, milliseconds: 0 })

    const generated = []
    let cursor = set(base, { hours: sh, minutes: sm, seconds: 0, milliseconds: 0 })

    while (isBefore(cursor, limit) || isEqual(cursor, limit)) {
      const end = addMinutes(cursor, 30)
      // Incluir solo si el inicio está >= minAllowed y el final <= limit
      if ((isEqual(cursor, minAllowed) || isBefore(minAllowed, cursor)) 
          && (isBefore(end, addMinutes(limit, 1)))) {
        generated.push({
          value: cursor,
          label: `${format(cursor, 'HH:mm')} – ${format(end, 'HH:mm')}`
        })
      }
      cursor = end
    }

    setSlots(generated)
    setSelectedSlot(null)
  }, [selectedDate, startTime, endTime])

  const handleClick = (slot) => {
    setSelectedSlot(slot.value)
    onTimeSelect?.(slot.value)
  }

  if (!selectedDate) {
    return <></>
  }

  return (
    <div className="timepicker-container">
      <div className="slots-grid">
        {slots.map((slot) => (
          <button
            key={slot.value.toISOString()}
            className={`slot-button ${selectedSlot?.toISOString() === slot.value.toISOString() ? 'selected' : ''}`}
            onClick={() => handleClick(slot)}
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  )
}
