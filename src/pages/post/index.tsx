import { useContext, useEffect, useState } from "react";
import { ContentPost } from "../../components/contentPost";
import { PostInfos } from "../../components/postInfos";
import { GithubContext } from "../../contexts/GithubContext";
import { ContainerPost } from "./style";

interface Post {
    title : string,
    user: User,
    body: string,
    created_at : string,
    id: number,
    comments ?: string 
}

interface User {
    login: string,
}



export function Post () {
    const { fetchPosts, listOfPosts } = useContext(GithubContext)
    const [ postSelected, setPostSelected ] = useState<Post | undefined>()

   async function viewPublication() {
        const savedPostId = localStorage.getItem('selectPostId')
        const selectPost = listOfPosts.find((post) => post.id === Number(savedPostId))
        setPostSelected(selectPost)
    }

    useEffect(() => {
        
        fetchPosts()
        viewPublication()
    }, [listOfPosts])

    return(
        <ContainerPost>
            <PostInfos 
                title={postSelected?.title} 
                created_at={postSelected?.created_at} 
                user={postSelected?.user.login} 
                comments={postSelected?.comments}
            />
            <ContentPost body={postSelected?.body}/>
        </ContainerPost>
    )
}