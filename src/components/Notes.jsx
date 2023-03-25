import React, { useEffect, useState } from "react";

const Notes = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    fetchData();
  }, []);
  const fetchData = async () => {
    fetch("https://prickly-fish-pocketbook.cyclic.app/notes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  const deleteData = async (id) => {
    try {
      const status = await fetch(`https://prickly-fish-pocketbook.cyclic.app/notes/delete/${id}`, {
        Authorization: `Bearer ${token}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Notes</h1>
      {data?.length > 0 ? (
        data?.map((el) => {
          return (
            <div>
              <h4>{el.title}</h4>
              <p>{el.desc}</p>
              <button
                onClick={() => {
                  deleteData(el._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h3>There is No Data</h3>
      )}
    </div>
  );
};

export default Notes;
