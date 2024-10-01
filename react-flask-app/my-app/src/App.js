import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const receiptNumber = 10;
  const [data, setData] = useState(Array.from({ length: receiptNumber }, () => null));

  useEffect(() => {
    const getPredictData = async () => {
      const requests = [];

      // 병렬 요청을 위한 axios.get 호출
      for (let order = 0; order < receiptNumber; order++) {
        console.log(`Request ${order} sent at: ${Date.now()}`); // 요청 보낸 시간

        requests.push(
          axios.get(`http://localhost:5001/flaskTest/${order}`)
            .then(response => {
              console.log(`Response ${order}:`, response.data); // 응답 데이터 로그
              console.log(`Response ${order} received at: ${Date.now()}`); // 응답 받은 시간
              return response.data;
            })
        );
      }

      // 모든 요청을 병렬로 처리
      try {
        const responses = await Promise.all(requests);
        const fetchedData = responses.map((response) => response);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPredictData();
  }, []);

  return (
    <div>
      <h1>Axios 병렬 요청 테스트</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item ? `ID ${index}: ${item.data}` : `ID ${index}: 로딩 중...`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
