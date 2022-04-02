import { useEffect, useState } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../utils/utils";

const url = urlcat(`${BACKEND}/api/holidays`);

function HolidayList() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHolidays(data));
  }, []);

  const handleDelete = (id) => () => {
    const url2 = urlcat(`${BACKEND}/api/holidays/${id}`)
    fetch(url2, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleUpdate = (holiday) => () => {
    const url3 = urlcat(`${BACKEND}/api/holidays/${holiday._id}`);
    const newHoliday = { ...holiday, likes: holiday.likes + 10 }
    
    fetch(url3, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHoliday),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday._id}>
            {holiday.name} --{" "}
            <span onClick={handleUpdate(holiday)}>{holiday.likes}</span>
            --
            <span onClick={handleDelete(holiday._id)}>Delete</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HolidayList;
