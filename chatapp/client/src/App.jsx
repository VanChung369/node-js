import React,{useState} from 'react'
// thu vien chat 
import {Chat} from 'stream-chat-react'
// thu vien de stream chat
import { StreamChat } from 'stream-chat'
// thu vien de luu cookies
import Cookies from 'universal-cookie'
import { Main , ListNav} from './components'
import './App.css';

// lay api cua chat https://getstream.io/
const apikey= 'zndjx2cm9rr5';
// tao phuong thuc tro chuyen truc tiep
const client = StreamChat.getInstance(apikey);
const App = () => {
  return (
    <div className='layout'>
        <Chat client={client} theme="tem">
           <ListNav/>
           <Main/>
        </Chat>
    </div>
  )
}

export default App