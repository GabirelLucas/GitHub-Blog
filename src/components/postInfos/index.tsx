import { ArrowSquareOut, CaretLeft, Calendar, ChatCircle} from "phosphor-react";
import { Actions, BackHome, Details, InfosPost } from "./style";
import iconGit from "../../assets/iconGit.svg";
import { ptBR } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

interface PostInfosProps {
    title : string | undefined,
    user: string  | undefined,
    created_at : string | undefined,
    comments ?: string | undefined 
}

export function PostInfos({created_at, title, user, comments}: PostInfosProps){
    
    return (
        <InfosPost>
            <Actions>
                <BackHome to="/">
                    <CaretLeft size={16} />
                    VOLTAR
                </BackHome>
                <a href="#">
                    <ArrowSquareOut size={16} /> 
                    VER NO GITHUB
                </a>
            </Actions>
            <h1>{title}</h1>
            <Details>
                <p>
                    <img src={iconGit}/>
                    {user}
                </p>
                <p>
                    <Calendar size={20}  color="#3A536B"/>
                    {created_at ? formatDistanceToNow(created_at, { 
                        addSuffix: true, 
                        locale: ptBR 
                        }) : 
                        "Data não disponível"
                    }
                </p>
                <p>
                    <ChatCircle size={20} color="#3a536b" weight="fill" />
                    {comments}
                </p>
            </Details>
        </InfosPost>
    )
}