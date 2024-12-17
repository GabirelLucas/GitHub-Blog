import { ContentContainer } from "./style";

interface ContentPostProps {
    body : string | undefined
}

export function ContentPost({body} : ContentPostProps) {
    return(
        <ContentContainer>
            {body}  
        </ContentContainer>
        
    )
}