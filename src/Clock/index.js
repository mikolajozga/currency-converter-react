import { useEffect, useState } from "react";
import "./style.css";

const dateFormatted = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "numeric",
    year: "numeric"
}) 

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(IntervalId);
        };
    }, []);

    return (
        <div className="clock">
            Dzisiaj jest
            {" "}
            {dateFormatted(date)}
        </div>
    )
};



