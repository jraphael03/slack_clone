import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';


function Chat({ user }) {     // get user from App.js
  let { channelId } = useParams(); // id is in the url (App.js route path)
  const [ channel, setChannel ] = useState();   // Save data from getChannel snapshot to useState
  const [ messages, setMessages ] = useState([]); // Save data from getMessage snapshot to useState

  const getMessages = () => {
    db.collection("rooms")
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => {
      let messages = snapshot.docs.map((doc) => doc.data());
      //console.log(messages);
      setMessages(messages);
    })
  }

  // ADDING TEXT TO DB FOR REALTIME DISPLAY IN CHAT
  const sendMessage = (text) => { 
    if(channelId){
      let payload = {     // payload, what we want to deliver
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),    // Timestamp that comes directly from firebase    
        user: user.name,
        userImage: user.photo
      }
      db.collection('rooms').doc(channelId).collection('messages').add(payload);  // db collection room pass url id (chatroom) to messages and add input text
    }
  }

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
        console.log(snapshot.data());
      });
  };

  useEffect(() => {
    getChannel();
    getMessages();
  },[channelId]);   // Whenever channelId changes run 

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            # {channel && channel.name}     {/* Need to put channel & channel name in case name does not exist or it takes awhile to load */}
          </ChannelName>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />      {/* This component is being used for InfoOutlinedIcon so we can style and position*/}
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {
          messages.length > 0 && 
          messages.map((data, index) => (
            <ChatMessage 
              text = {data.text}
              name = {data.user}
              image = {data.userImage}
              timestamp = {data.timestamp}
            />
          ))
        }
      </MessageContainer>
      <ChatInput sendMessage={sendMessage} /> {/* Has its own component file */}
    </Container>
  );
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;        // header messagecontainer chatinput (min-content: take up as much space as needed for the items)
`

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  justify-content: space-between;           // Push ChannelInfo, ChannelName, away from ChannelDetails
`

const Channel = styled.div`

`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
    
`

const Info = styled(InfoOutlinedIcon)`      //Importing InfoOutlinedIcon to Info for styling/postioning
    margin-left: 10px;
`

const ChannelName = styled.div`
    font-weight: 700;
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`


const MessageContainer = styled.div`

`


