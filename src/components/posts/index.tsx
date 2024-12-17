import { useContext, useEffect, useState } from "react";
import { ContentMain, Post, PostsContainer, DescriptionContainer, SearchPosts, TitleContainer, TitlePost } from "./style";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR"
import { GithubContext } from "../../contexts/GithubContext";

interface Post {
    title : string,
    user: string,
    body: string,
    created_at : string,
    id: number
}

const SearchFormSchema = zod.object({
    query: zod.string().min(1)
})

export type SearchFormTypes = zod.infer<typeof SearchFormSchema>


export function Posts (){
    const {listOfPosts, fetchPosts, handleSelectPost} = useContext(GithubContext)
    const [publications, setPublications] = useState(0)
    const {register, handleSubmit, watch} = useForm<SearchFormTypes>({
        resolver: zodResolver(SearchFormSchema)
    })

    const query = watch('query')
    const isFormDisabled = !query

    useEffect(() => {
        fetchPosts()
        
    }, [isFormDisabled])

    useEffect(() => {
        setPublications(listOfPosts.length)
    }, [listOfPosts])

   async function handleSearchForm (data: SearchFormTypes){
       fetchPosts(data)
    }

    return(
        <PostsContainer>
            <TitleContainer>
                <h2>Publicações</h2>
                <span>{publications} publicações</span>
            </TitleContainer>
            <SearchPosts onSubmit={handleSubmit(handleSearchForm)}>
                <input 
                    type="search" 
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                />
            </SearchPosts>
            <ContentMain>
                {listOfPosts.map((post) => {
                    return(
                        <Post to="/post" key={post.id} onClick={() => handleSelectPost(post.id)} >
                            
                            <TitlePost>
                                <h2>{post.title}</h2>
                                <span>
                                    {formatDistanceToNow(new Date(post.created_at), {
                                        addSuffix: true,
                                        locale: ptBR
                                    })}
                                </span>
                            </TitlePost>
                            <DescriptionContainer>
                                {post.body}              
                            </DescriptionContainer>
                        </Post>
                    )
                })}
               
            </ContentMain>
        </PostsContainer>
    )
}