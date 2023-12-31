import React from 'react';
import styled from 'styled-components';
import ContentBox from '../common/ContentBox';
import MyPageNav from './MyPageNav';
import MyPageUserData from './MyPageUserData';

const MyPageCompo: React.FC = () => {
    const a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 123, 123];

    return (
        <MyPageSection>
            <MyPageUserData />
            <MyPageNav />
            <ContentBox data={a} />
        </MyPageSection>
    );
};

export default MyPageCompo;

const MyPageSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0 0 0 50px;
`;
