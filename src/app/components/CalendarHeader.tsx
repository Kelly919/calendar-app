// src/app/components/CalendarHeader.tsx
import React from 'react';
import { format } from 'date-fns';

interface CalendarHeaderProps {
    currentMonth: Date;
    prevMonth: () => void;
    nextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="calendar-header">
            <button onClick={prevMonth}>{'<'}</button>
            <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
            <button onClick={nextMonth}>{'>'}</button>
        </div>
    );
};

export default CalendarHeader;
