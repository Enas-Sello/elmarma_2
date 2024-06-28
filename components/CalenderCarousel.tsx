'use client';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';

const CalenderCarousel = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date());
  const currentDate = new Date();
  // eslint-disable-next-line no-unused-vars
  const [formateValue, setFormateValue] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [activeDay, setActiveDay] = useState(currentDate.getDate());

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const sendDayToBAck = (day: React.SetStateAction<any>) => {
    const today = new Date(); // Get the current date
    const year = today.getFullYear(); // Get the current year
    const month = today.getMonth(); // Get the current month
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the current month

    // Increment the day value by 1 and handle cases where it exceeds the last day of the month
    const nextDay = day > lastDayOfMonth ? 1 : day + 1;

    // Create a new Date object using the current year, month, and the updated day
    const selectedDate = new Date(year, month, nextDay);

    // Format the date as "year-month-day"
    const formattedDate = selectedDate.toISOString().split('T')[0];
    setFormateValue(formattedDate);
    setActiveDay(day);

    return formattedDate;
  };

  return (
    <Carousel
      className="bg-primary bg-opacity-10 shadow-inner p-3 rounded"
      opts={{
        align: 'start',
        direction: 'rtl',
        // startIndex: 1
      }}>
      <CarouselContent className="gap-4 flex">
        {days.map((day, i) => (
          <CarouselItem
            onClick={() => sendDayToBAck(day)}
            key={i}
            className="basis-12">
            <div
              className={`rounded-full text-center  flex gap-4 items-center justify-center  h-12 w-12
              ${
                activeDay === day
                  ? 'bg-primary text-mainWhite active-slide '
                  : 'bg-mainWhite text-mainDark  '
              }
              `}>
              <p className="text-center"> {day.toString()}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CalenderCarousel;
