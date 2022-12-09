import React from 'react'
import styled from "styled-components";
import { Contact } from './Contact';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 30%;
`;
const ProfileInfoDiv = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding:10px;
`;

const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;
const SearchBox = styled.div`
    background: #f6f6f6;
    padding:10px;
`;
const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 16px;
    width: 100%;
    padding: 5px 4px;
`;
const SearchIcon = styled.img`
    width: 28px;
    height: 28px;
`;

const SearchInput = styled.input`
    width: 100%;
    outline:none;
    font-size:15px;
    border: none;
`;


export const ContactList = () => {
  return (
      <Container>
        <ProfileInfoDiv>
            <ProfileImage src="/profile/elon.jpg"/>
        </ProfileInfoDiv>
        <SearchBox>
            <SearchContainer>
                <SearchIcon src={"/search-icon.svg"}/>
                <SearchInput placeholder="Search or Start a new chat"/>
            </SearchContainer>
        </SearchBox>
        <Contact />
      </Container>
  )
}


