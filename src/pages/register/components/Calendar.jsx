/* eslint-disable react/prop-types */
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

import styled from "styled-components";

const CalendarContainer = styled.div`
  /* width: 300px; */
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  background-color: white;
  position: absolute;
  bottom: 100%;
  z-index: 10;
  left: 0;
  user-select: none;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #8dd444;
  color: #fff;
`;

const MonthYearSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    margin: 0 10px;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid #ccc;
`;

const Day = styled.div`
  padding: 10px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SelectedDay = styled(Day)`
  background-color: #8dd444;
  color: white;
  &:hover {
    background-color: #8dd444;
  }
`;

const EmptyLabel = styled(Day)`
  cursor: default;
  &:hover {
    background-color: #fff;
  }
`;

const Calendar = ({ selectedDate, setSelectedDate, setDate, date, close }) => {
  const previousMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(newDate);
  };
  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    close();
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(date);
    const firstDay = firstDayOfMonth(date);

    for (let i = 1; i <= totalDays + firstDay - 1; i++) {
      if (i >= firstDay) {
        const day = i - firstDay + 1;
        if (day === selectedDate) {
          days.push(
            <SelectedDay
              key={i}
              onClick={() => {
                handleDayClick(day);
              }}
            >
              {day}
            </SelectedDay>
          );
        } else {
          days.push(
            <Day
              key={i}
              onClick={() => {
                handleDayClick(day);
              }}
            >
              {day}
            </Day>
          );
        }
      } else {
        days.push(<EmptyLabel key={i}></EmptyLabel>);
      }
    }

    return days;
  };

  return (
    <CalendarContainer>
      <Header>
        <MonthYearSelector>
          <TiArrowLeft onClick={previousMonth} className="cursor" size={24} />
          <span>
            {date.toLocaleString("default", { month: "long" })}{" "}
            {date.getFullYear()}
          </span>
          <TiArrowRight onClick={nextMonth} className="cursor" size={24} />
        </MonthYearSelector>
      </Header>
      <CalendarGrid>
        <EmptyLabel>Sun</EmptyLabel>
        <EmptyLabel>Mon</EmptyLabel>
        <EmptyLabel>Tue</EmptyLabel>
        <EmptyLabel>Wed</EmptyLabel>
        <EmptyLabel>Thu</EmptyLabel>
        <EmptyLabel>Fri</EmptyLabel>
        <EmptyLabel>Sat</EmptyLabel>
        {renderCalendar()}
      </CalendarGrid>
    </CalendarContainer>
  );
};

export default Calendar;
