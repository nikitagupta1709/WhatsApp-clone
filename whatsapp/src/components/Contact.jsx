import React from 'react'
import styled from "styled-components";

const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    cursor: pointer;
    background: white;
    padding:: 15px 12px;
`;
const ProfileIcon = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`;

export const Contact = () => {
  return (
    <ContactItem>
        <ProfileIcon src='/profile/elon.jpg' />
    </ContactItem>
  )
}
