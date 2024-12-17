import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from "react-markdown"


export const PostsContainer = styled.div `
    margin: 4.5rem 16rem 0;
`

export const TitleContainer = styled.div `
    display: flex;
    justify-content: space-between;

    h2{
        font-size: 18px;
        font-weight: 700;
        color: ${props => [props.theme.LightBlue200]};
    }
    span{
        font-size: 14px;
        font-weight: 400;
        color: ${props => [props.theme.MediumBlue200]};
    }
`

export const SearchPosts = styled.form `
    input {
        width: 100%;
        background-color: ${props => [props.theme.DarkBlue200]};
        padding: 12px 16px;
        margin-top: 12px;
        border-radius: 6px;
        border: 1px solid ${props => [props.theme.DarkBlue500]};
        color: ${props => props.theme.MediumBlue100};
        outline: none;
    }
`

export const ContentMain = styled.main `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin: 3rem 0 8rem;

`

export const Post =  styled(NavLink) `
    background-color: ${props => [props.theme.DarkBlue400]};
    border-radius: 10px;
    padding: 32px;
    height: 260px;
    text-decoration: none;
    
    display: flex;
    flex-direction: column;
    gap: 20px;
 
`

export const DescriptionContainer = styled(ReactMarkdown) `
    color: ${props => [props.theme.LightBlue100]};
    display: -webkit-box;        /* Define o comportamento da caixa flexível */
    -webkit-line-clamp: 5;       /* Limita o número de linhas (neste caso, 3 linhas) */
    -webkit-box-orient: vertical; /* Define a orientação da caixa flexível */
    overflow: hidden;            /* Esconde o texto que ultrapassa o container */
    text-overflow: ellipsis;
    line-height: 160%;
    
`

export const TitlePost = styled.div `
    display: flex;
    gap: 12px;

    h2{
        font-size: 18px;
        font-weight: 700;
        color: ${props => [props.theme.VeryLightBlue]};
        overflow: hidden;
    }
    span {
        font-size: 12px;
        font-weight: 400;
        color: ${props => [props.theme.MediumBlue200]};
    }
`