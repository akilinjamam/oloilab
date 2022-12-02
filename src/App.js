import logo from './logo.svg';
import './App.css';
import PartOne from './Assignment/PartOne';
import { useEffect, useState } from 'react';
import TableComponentOne from './Assignment/TableComponentOne';
import TableComponentTwo from './Assignment/TableComponentTwo';
import TableComponentThree from './Assignment/TableComponentThree';
import Test from './Assignment/Test';
import TestTwo from './TestTwo';

function App() {

  const [data, setData] = useState([])

  console.log(data)

  useEffect(() => {

    fetch('tableTestData.json')
      .then(response => response.json())
      .then(response => setData(response))
  }, [])
  return (
    <div className="App">
      <PartOne />
      <TableComponentOne data={data} />
      <TableComponentTwo data={data} />
      <TableComponentThree data={data} />
      {/* <Test data={data} /> */}
      {/* <TestTwo></TestTwo> */}
    </div>
  );
}

export default App;
