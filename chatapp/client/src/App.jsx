import React, { useState } from "react";
// thu vien chat
import { Chat } from "stream-chat-react";
// thu vien de stream chat
import { StreamChat } from "stream-chat";
// thu vien de luu cookies
import Cookies from "universal-cookie";

import { Main, ListNav, Auth } from "./components";
import 'stream-chat-react/dist/css/index.css';
import "./App.css";

// lay api cua chat https://getstream.io/
const apikey = "zndjx2cm9rr5";
const cookies = new Cookies();
const tokenAuth = cookies.get("token");
// tao phuong thuc tro chuyen truc tiep
const client = StreamChat.getInstance(apikey);
if (tokenAuth) {
  client.connectUser({
    name: cookies.get("name"),
    fullName: cookies.get("fullName"),
    id: cookies.get('userId'),
    phoneNumber: cookies.get("phoneNumber"),
    image: cookies.get("avatar"),
    hashedPassword: cookies.get("hashedPassword"),
  },tokenAuth);
}

const App = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (!tokenAuth) {
    return <Auth />;
  }
  return (
    <div className="layout">
      <Chat client={client} theme="tem">
        <ListNav
           isCreating={isCreating}
           setIsCreating={setIsCreating}
           setCreateType={setCreateType}
           setIsEditing={setIsEditing}
         />
        <Main 
           isCreating={isCreating}
           setIsCreating={setIsCreating}
           isEditing={isEditing}
           setIsEditing={setIsEditing}
           createType={createType}
        />
      </Chat>
    </div>
  );
};

export default App;
