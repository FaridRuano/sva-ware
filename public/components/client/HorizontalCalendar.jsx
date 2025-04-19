'use client'
import { useState } from 'react';
import {
    format,
    startOfWeek,
    addDays,
    isSameDay,
    isBefore,
    startOfDay,
    isAfter
} from 'date-fns'
import { es } from 'date-fns/locale'
import ArrowLeft from '@public/assets/icons/arrow-left.webp'
import ArrowRight from '@public/assets/icons/arrow-right.webp'
import Image from '@node_modules/next/image'


/**
 * Muestra un calendario horizontal de 7 días, con controles
 * para navegar a la semana anterior y la siguiente.
 */
export default function HorizontalCalendar({ onDateChange, defaultDate, endDate }) {

    const initialDate = defaultDate ? new Date(defaultDate) : new Date()

    // La semana inicia el lunes
    const [currentWeekStart, setCurrentWeekStart] = useState(
        startOfWeek(new Date(), { weekStartsOn: 1 })
    )

    // Día seleccionado en la interfaz
    const [selectedDay, setSelectedDay] = useState(initialDate)

    // Generamos los 5 días laborables de la semana (lunes a viernes)
    const daysOfTheWeek = Array.from({ length: 5 }).map((_, index) =>
        addDays(currentWeekStart, index)
    )

    // Fecha actual normalizada al inicio del día
    const today = startOfDay(new Date())

    // Si se recibe endDate, lo normalizamos (puede venir como string o Date)
    const maxDate = endDate ? startOfDay(new Date(endDate)) : null;

    // Navega a la semana anterior
    const handlePrevWeek = () => {
        setCurrentWeekStart((prev) => addDays(prev, -7))
    }

    // Navega a la semana siguiente
    const handleNextWeek = () => {
        setCurrentWeekStart((prev) => addDays(prev, 7))
    }

    // Maneja el click en un día, solo si no es anterior a hoy
    const handleDayClick = (day) => {
        const dayStart = startOfDay(day);
        // Si el día es anterior a hoy, o si maxDate existe y el día es posterior, no se permite
        const isOutOfRange = isBefore(dayStart, today) || (maxDate && isAfter(dayStart, maxDate));
        if (!isOutOfRange) {
            setSelectedDay(day);
            if (onDateChange) {
                onDateChange(day);
            }
        }
    };

    return (
        <div className="calendar-container">
            <div className="calendar-row">
                <button className="nav-button" onClick={handlePrevWeek}>
                    <Image src={ArrowLeft} width={10} height={'auto'} alt='Icon' />
                </button>

                <div className="days-wrapper">
                    {daysOfTheWeek.map((day) => {
                        const isSelected = isSameDay(day, selectedDay)
                        const dayStart = startOfDay(day)
                        // Deshabilitamos el día si es anterior a hoy o posterior a maxDate (si se recibe endDate)
                        const isDisabled = isBefore(dayStart, today) || (maxDate && isAfter(dayStart, maxDate))
                        return (
                            <div
                                key={day.toString()}
                                className={`day-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                onClick={() => handleDayClick(day)}
                            >
                                <div className="day-label">
                                    {format(day, 'EEE', { locale: es })}
                                </div>
                                <div className="day-number">
                                    {format(day, 'd')}
                                </div>
                                <div className="month-label">
                                    {format(day, 'LLL', { locale: es })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button className="nav-button" onClick={handleNextWeek}>
                    <Image src={ArrowRight} width={10} height={'auto'} alt='Icon' />
                </button>
            </div>

            <div className="selected-info">
                {format(selectedDay, 'EEEE, d LLL yyyy', { locale: es })}
            </div>
        </div>
    );
}
