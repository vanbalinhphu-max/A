// "use server";

// async function fetchData() {
//   console.log('Fetching data,...');

//   const res = await fetch(`/api/timestamp`);

//   return res.json();
// }


const MemoizationPage = async () => {
  // const data1 = await fetchData();
  // const data2 = await fetchData();

  const data1 = {timestamp: 'aaa'}
  const data2 = {timestamp: 'aaa'}

  return (
      <div>
        <h1>Request Memoization</h1>
        <p>Timestamp 1: {data1.timestamp}</p>
        <p>Timestamp 2: {data2.timestamp}</p>
      </div>
  )
}

export default MemoizationPage;