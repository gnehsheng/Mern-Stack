import { useEffect, useState } from "react";
import { BACKEND } from "../utils/utils";

export default function HolidayList() {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch(`${BACKEND}/api/holidays/seed`)
            .then((response) => response.json())
            .then((data) => setHolidays(data));
    }, []);

    const handleDelete = (id) => {
        const url = `${BACKEND}/api/holidays/${id}`
        fetch(url, { method: "DELETE" })
            .then((response) => response.json())
            .then((data) => setHolidays(data));
    }

    return (
        <>
            <table>
                <tbody>
                    {holidays.map((holiday) => {
                        return (
                            <tr key={holiday._id}>
                                <td>
                                    <a href='#'>{holiday.name}</a>
                                    <button onClick={handleDelete(holiday._id)}>Delete</button>
                                </td>
                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}