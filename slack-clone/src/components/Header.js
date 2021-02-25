import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />

            </Main>
            <UserContainer>
                <Name>
                    Justin
                </Name>
                <UserImage>
                    <img src="/images/img1.jpg" alt="User"/>            {/* Image is held in the public folder */}
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
  background: #540d36;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Main = styled.div`
    display: flex;      // Layouts items inside of the div
    margin-right: 16px;
    margin-left: 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
    
`

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    // target input inside of the Search component
    background: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: #ffffff;
    width: 100%;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  input:focus{              // When you click on the search contianer and the blue border pops up
      outline: none;
  }

`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;     // position relative in the container
    right: 0;
`

const Name = styled.div`
  padding-right: 16px;
`

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;

  img{
      width: 100%;
      height: 100%;
  }

`
