import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat() {
    return (
      <Container>
        <Header>
          <Channel>
            <ChannelName># Code</ChannelName>
            <ChannelInfo>
              Company-wide announcements and work-based matters
            </ChannelInfo>
          </Channel>
          <ChannelDetails>
            <div>Details</div>
            <Info />    {/* This component is being used for InfoOutlinedIcon so we can style and position*/}
          </ChannelDetails>
        </Header>
        <MessageContainer>
            <ChatMessage />
        </MessageContainer>
        <ChatInput />           {/* Has its own component file */}
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


