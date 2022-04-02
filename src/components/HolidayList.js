import { useEffect, useState } from "react";
import { BACKEND } from "../utils/utils";

export default function HolidayList() {
    const [holidays, setHolidays] = useState([]);

    const deleteHoliday = (id) => {
        fetch("/holidays/" + id, {
          method: "DELETE",
        }).then((response) => {
          setHolidays(holidays.filter((day) => day._id !== id));
        });
      };

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
                                <td>
                                    <a href='#'>{holiday.name}</a> <br/>
                                    <td onClick={() => deleteHoliday(holiday._id)}>Delete</td>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}