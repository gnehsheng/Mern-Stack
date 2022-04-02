import { useEffect, useState } from "react";
import { BACKEND } from "../utils/utils";

export default function HolidayList() {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch(`${BACKEND}/api/holidays/seed`)
            .then((response) => response.json())
            .then((data) => setHolidays(data));
    }, []);

    return (
        <>
            <table>
                <tbody>
                    {holidays.map((holiday) => {
                        return (
                            <tr key={holiday.id}>
                                <td><a href='#'>{holiday.name}</a> </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}