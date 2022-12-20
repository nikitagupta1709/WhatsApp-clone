import React from 'react'
import styled from "styled-components";
import { Contact } from './Contact';
import { contactList } from '../mockData';

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
    display: flex;
`;
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 8px;
    width: 100%;
    padding: 5px 10px;
`;
const SearchIcon = styled.img`
    width: 28px;
    height: 28px;
`;

export const SearchInput = styled.input`
    width: 100%;
    outline:none;
    font-size:15px;
    border: none;
    margin-left:10px; 
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
        { contactList.map((userData) => (
             <Contact userData={userData}/>
        ))}
      </Container>
  )
}


