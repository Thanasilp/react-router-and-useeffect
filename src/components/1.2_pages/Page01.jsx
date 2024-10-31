import { useState, useEffect } from "react";

const fetchDataWithCallback = (callback, errorCallback) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => callback(data))
    .catch((error) => errorCallback(error.message));
};

const FetchDataExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchDataWithCallback(
      (data) => {
        setData(data);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div>
      <h1>Fetch User Data (Callback)</h1>
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

const PageOne = () => {
  return (
    <div className="p-20">
      <h1>This is Page One</h1>
      <p>Welcome to Page One!</p>
      <FetchDataExample />
    </div>
  );
};

export default PageOne;
