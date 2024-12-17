import styled from "styled-components";
//import {ArrowSquareOut} from "phosphor-react"


export const ProfileContainer = styled.section `
    display: flex;
    gap: 32px;
    margin: -6.5rem 16rem 0;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.4);
    background-color: ${props => [props.theme.DarkBlue300]};
    color: ${props => [props.theme.VeryLightBlue]};

    img {
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }

`

export const Name = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 700;

    a{
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${props => props.theme.BrightBlue};
        text-decoration: none;
        font-size: 12px;
    }
`

export const Description = styled.p `
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme.LightBlue100};
    margin-bottom: 24px;
` 

export const SocialLinks = styled.div`
    display: flex;
    gap: 24px;

    img {
        width: 18px;
        height: 18px;
    }

    span {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`