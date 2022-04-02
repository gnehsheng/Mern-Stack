import { useEffect, useState } from "react";
import urlcat from 'urlcat';

const BACKEND = process.env.REACT_APP_BACKEND ?? "http://localhost:2000" 
const url = urlcat(`${BACKEND}/api/holidays`);

function Seed() {
  const [seed, setSeed] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSeed(data));
  }, []);

  return (
    <>
      <h1>Seed 2</h1>
      <pre>{JSON.stringify(seed, null, 2)}</pre>
    </>
  );
}

export default Seed;
