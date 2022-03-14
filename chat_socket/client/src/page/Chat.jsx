import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Chat = () => {
  const navigate = new useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  // chay dung 1 lan sau khi render
  useEffect(() => {
    async function checkuser() {
      if (localStorage.getItem("chat-app") == "") {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app")));
      }
    }
    checkuser();
  }, []);

  useEffect(() => {
    async function data() {
      if (currentUser) {
        if (currentUser.avatar) {
          const url = "http://localhost:8000/api/user/alluser";
          const datauser = await axios.get(`${url}/${currentUser._id}`);
          setContacts(datauser.data);
        } else {
          navigate("/Signup");
        }
      }
    }
    data();
  }, [currentUser]);
  return (
    <>
      <div className="layout">
        <Navbar />
        <Sidebar contacts={contacts}/>
      </div>
    </>
  );
};

export default Chat;
