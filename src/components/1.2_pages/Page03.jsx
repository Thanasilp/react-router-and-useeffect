import { useState, useEffect } from "react";

const fetchDataWithAsyncAwait = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const FetchDataExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await fetchDataWithAsyncAwait();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Fetch User Data (Async/Await)</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const PageThree = () => {
  return (
    <div className="p-20">
      <h1>This is Page Three</h1>
      <p>Welcome to Page Three!</p>
      <FetchDataExample />
    </div>
  );
};

export default PageThree;
