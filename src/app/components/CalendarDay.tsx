// src/app/components/CalendarDay.tsx
import React from 'react';
import { format, isSameDay } from 'date-fns';

interface CalendarDayProps {
    date: Date;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date }) => {
    return (
        <div className={`calendar-day ${isSameDay(date, new Date()) ? 'today' : ''}`}>
            <span>{format(date, 'd')}</span>
        </div>
    );
};

export default CalendarDay;
