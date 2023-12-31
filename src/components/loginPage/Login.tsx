import React from 'react';
import GoogleLoginBtn from './GoogleLoginBtn';
import KakaoLoginBtn from './KakaoLoginBtn';
import EmailLogin from './EmailLogin';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import right_arrow from '../../images/right_arrow.png'
import line  from '../../images/line.png'

const Login:React.FC = () => {
    return (
        <LoginSection>
            <Wrap>
                <StyledSpan size={'20pt'}>{'로그인'}</StyledSpan>
            <LinkBox>
            <StyledLink to={'/signup'}>
                <StyledSpan size ={'14pt'}>{'회원가입하기'}</StyledSpan>
                <img src={right_arrow}></img>
            </StyledLink>
            </LinkBox>
       
            <EmailLogin />

            <BoundaryLine>
           <Img src={line}/> <Span>또는</Span>  <Img src={line}/> 
            </BoundaryLine>

            <GoogleLoginBtn width='350px' height='50px'/>
            <KakaoLoginBtn width='100%' height='50px'/>
            </Wrap>
        </LoginSection>
        
    );
};

export default Login;

const LoginSection = styled.section`
    display:flex;
    justify-content:center;
    padding-top:60px;
    padding-bottom:50px;
    height:80vh; 
`

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:380pt;
    gap:10px;

   /*  max-width:350px; */

`
const StyledLink=styled(Link)`
    text-decoration:none;
    display:flex;
    align-items:center;
`
const LinkBox=styled.div`
    margin-left:auto;
`

interface StyledSpanProps {
    size: string;
  }

const StyledSpan=styled.span<StyledSpanProps>`
    font-size:${props=>(props.size)};
`
const BoundaryLine=styled.div`
    display:flex;
    width:100%;
    align-items:center;
`

const Img=styled.img`
    height:1px;
    width:0;
    flex-grow:1;
`

const Span = styled.span`
    width:20%;
    text-align:center;
`
