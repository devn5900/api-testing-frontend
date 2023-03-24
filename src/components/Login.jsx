import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",

    password: "",
  });
  const [msg, setMsg] = useState("");
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const postData = (e) => {
    e.preventDefault();
    fetch("https://prickly-fish-pocketbook.cyclic.app/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          setMsg(res.token);
          localStorage.setItem("token", res.token);
        } else {
          setMsg(res.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h4>{msg}</h4>
      <form onSubmit={postData}>
        <input onChange={onChange} type="email" name="email" />
        <input onChange={onChange} type="password" name="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
