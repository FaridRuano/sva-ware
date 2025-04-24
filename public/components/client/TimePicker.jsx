'use client'
import React, { useState, useEffect } from 'react'
import {
  format,
  set,
  addMinutes,
  isBefore,
  isEqual,
  startOfDay,
  add,
  isSameDay
} from 'date-fns'
import { fromZonedTime, toZonedTime } from '@node_modules/date-fns-tz/dist/cjs';

const TUTOR_TIME_ZONE = 'America/Guayaquil'

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
  endTime = '22:00'
}) {

  const userTimeZone = typeof Intl !== 'undefined'
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : 'UTC';

  const [slots, setSlots] = useState([])
  const [selectedSlot, setSelectedSlot] = useState(null)

  useEffect(() => {
    if (!selectedDate) {
      setSlots([])
      return
    }

    // 2. Creamos la "fecha base" en zona del tutor convertida a UTC
    const dateStr = format(selectedDate, 'yyyy-MM-dd')
    const baseUtc = fromZonedTime(`${dateStr}T${startTime}:00`, TUTOR_TIME_ZONE)
    const limitUtc = fromZonedTime(`${dateStr}T${endTime}:00`, TUTOR_TIME_ZONE)

    // 3. Calculamos la hora mínima (hoy+4h) también en UTC
    const now = new Date()
    const minAllowedUtc = isSameDay(selectedDate, now)
      ? fromZonedTime(add(now, {hours: 4}).toISOString(), TUTOR_TIME_ZONE)  // ahora UTC
      : baseUtc

    // 4. Generamos slots en UTC para el tutor
    const generated = []
    let cursor = baseUtc

    while (isBefore(cursor, limitUtc) || isEqual(cursor, limitUtc)) {
      const end = addMinutes(cursor, 30)
      const startsAfterMin = isSameDay(selectedDate, now)
        ? isBefore(minAllowedUtc, cursor) || isEqual(minAllowedUtc, cursor)
        : true

      if (startsAfterMin && (isBefore(end, addMinutes(limitUtc, 1)))) {
        // 5. Convertimos cada slot a la hora local del usuario para mostrar
        const localStart = toZonedTime(cursor, userTimeZone)
        const localEnd = toZonedTime(end, userTimeZone)

        generated.push({
          value: cursor, // guardamos UTC para enviar al backend
          label: `${format(localStart, 'HH:mm')} – ${format(localEnd, 'HH:mm')}`
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
