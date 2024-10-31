import { useState, useEffect } from "react";

const fetchDataWithPromise = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    }
  );
};

const FetchDataExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchDataWithPromise()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Fetch User Data (Promise)</h1>
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

const PageTwo = () => {
  return (
    <div className="p-20">
      <h1>This is Page Two</h1>
      <p>Welcome to Page Two!</p>
      <FetchDataExample />
    </div>
  );
};

export default PageTwo;
