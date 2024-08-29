// src/app/components/Calendar.tsx
"use client";
import React from 'react';
import { addMonths, subMonths, format, startOfWeek, addDays, parse } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import CalendarDay from './CalendarDay';

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = React.useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const renderDays = () => {
        const startDate = startOfWeek(currentMonth);
        const days = [];

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="day-name" key={i}>
                    {format(addDays(startDate, i), 'eee')}
                </div>
            );
        }

        return <div className="days-row">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = parse(format(currentMonth, 'yyyy-MM'), 'yyyy-MM', new Date());
        const startDate = startOfWeek(monthStart);
        const days = [];

        for (let i = 0; i < 42; i++) {
            days.push(<CalendarDay key={i} date={addDays(startDate, i)} />);
        }

        return <div className="days-grid">{days}</div>;
    };

    return (
        <div className="calendar">
            <CalendarHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default Calendar;
