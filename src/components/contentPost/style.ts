import styled from "styled-components";
import ReactMarkdown from "react-markdown"


export const ContentContainer = styled(ReactMarkdown) `
    margin: 2.5rem 16rem 0;
    padding: 0 32px;

    
        color: ${props => [props.theme.LightBlue100]};
        
        font-weight: 400;
        font-size: 16px;
        margin-top: 30px;
    
`

export const TextPost = styled.div `
    font-size: 16px;
    font-weight: 400;
    color: ${props => [props.theme.LightBlue100]};
    
`

export const Code = styled.section `
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: ${props => [props.theme.DarkBlue400]};
    color: ${props => [props.theme.LightBlue100]};
    padding: 16px;
    margin: 24px 0 168px;
`

export const ValueVariavel = styled.span `
    color: #6AD445;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
`

export const Comment = styled.span `
    color: #4F6173;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    margin-left: 18px;
`