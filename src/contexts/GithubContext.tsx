import { createContext, ReactNode, useState} from "react";
import { SearchFormTypes } from "../components/posts";
import { api } from "../lib";


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




interface githubContextTypes {
    listOfPosts : Post[],
    fetchPosts : (data?: SearchFormTypes ) => void,
    handleSelectPost : (id: number) => void,

}

interface githubContextProvider {
    children: ReactNode
}



export const GithubContext = createContext({} as githubContextTypes)



export function GithubContextProvider({children} : githubContextProvider) {
    const [listOfPosts, setListOfPosts] = useState<Post[]>([])
    

    async function fetchPosts(data?: SearchFormTypes | string) {
        const query = typeof data === 'string' ? data : data?.query;
        if(query) {
            const resp = await api.get(`search/issues?q=${query} repo:GabirelLucas/GitHub-Blog`)
            
            const filteredPosts = await resp.data.items
            setListOfPosts(filteredPosts)
            
        } else {
            const resp = await api.get('/repos/gabirelLucas/GitHub-Blog/issues')
            const datasOfPosts = await resp.data
            setListOfPosts(datasOfPosts)
            
        }
    }

    function handleSelectPost (id: number) {
       /* const dataOfPost = listOfPosts.find(post => post.id == id)
        if (dataOfPost) {
            const postSelected = {
                title: dataOfPost?.title,
                user: { login: dataOfPost.user.login },
                comment : dataOfPost?.comments,
                created_at : dataOfPost?.created_at,
                body :  dataOfPost?.body,
                id : dataOfPost?.id
            }
            setPost(postSelected)
        } else {
            console.error(`Post with id ${id} not found`);
            setPost(undefined);  // Opcional, mas pode ser útil para resetar o post
        }*/
        localStorage.setItem('selectPostId', id.toString())
    }

    

    return (
        <GithubContext.Provider value={{listOfPosts, fetchPosts, handleSelectPost}} >
            {children}
        </GithubContext.Provider>
    )

}