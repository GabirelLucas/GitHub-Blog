import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const InfosPost = styled.section `
    display: flex;
    flex-direction: column;
    margin: -6.5rem 16rem 0;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.4);
    background-color: ${props => [props.theme.DarkBlue300]};
    color: ${props => [props.theme.VeryLightBlue]};
`
export const Actions = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    a{
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${props => props.theme.BrightBlue};
        text-decoration: none;
        font-size: 12px;
        font-weight: 700;
    }
`
export const BackHome = styled(NavLink)  `
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${props => props.theme.BrightBlue};
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
`

export const Details = styled.span `
    display: flex;
    gap: 32px;
    margin-top: 8px;

    p{
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        font-weight: 400;
        color: ${props => [props.theme.MediumBlue200]};
    }
`