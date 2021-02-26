import React from 'react'
import styled from 'styled-components';

function ChatMessage({ text, name, image, timestamp }) {      // Getting passed in from component Chat.js at the ChatMessage component
    return (
      <Container>
        <UserAvatar>
          <img src={ image } alt={name} />
        </UserAvatar>
        <MessageContent>
            <Name>
              { name }
                <span>{new Date(timestamp.toDate()).toUTCString() }</span>      {/* Convert date to string */}
            </Name>
          <Text>{ text }</Text>
        </MessageContent>
      </Container>
    );
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;          // verticle horizontal
    display: flex;
    align-items: center;
`

const UserAvatar = styled.div`
    width: 36px;            // img will continue to overflow need to target and set width to 100%
    height: 36px;
    border-radius: 2px;
    overflow: hidden;       // forces the border-radius on images that overflow

    img{
        width: 100%;
    }
    margin-right: 8px;
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;         // flex-direction to change from row to column

`

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97.96.97);
    font-size: 13px;
  }
`

const Text = styled.div`

`