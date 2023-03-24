import React, { useState } from "react";

const Singup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    dob: "",
    role: "",
    location: "",
    password: "",
    confirm_password: "",
  });
  const [msg, setMsg] = useState("");
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const postData = (e) => {
    e.preventDefault();
    fetch("https://prickly-fish-pocketbook.cyclic.app/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setMsg(res.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h4>{msg}</h4>
      <form onSubmit={postData}>
        <input onChange={onChange} type="text" name="username" />
        <input onChange={onChange} type="email" name="email" />
        <input onChange={onChange} type="date" name="dob" />
        <select name="role" defaultValue={"Admin"} onChange={onChange}>
          <option value={"Admin"}>Admin</option>
          <option value={"Explorer"}>Explorer</option>
        </select>
        <input onChange={onChange} type="text" name="location" />
        <input onChange={onChange} type="password" name="password" />
        <input onChange={onChange} type="password" name="confirm_password" />
        <input onChange={onChange} type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Singup;
