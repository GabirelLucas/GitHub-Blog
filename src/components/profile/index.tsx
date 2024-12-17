import {ArrowSquareOut} from "phosphor-react"
import { Description, Name, ProfileContainer, SocialLinks } from "./style"
import iconGit from "../../assets/iconGit.svg";
import followersIcon from "../../assets/followersIcon.svg";
import {useEffect, useState } from "react";
import { api } from "../../lib";


interface InfosProfile {
    name: string,
    image: string,
    bio: string,
    office?: string,
    followers: number,
    userName: string
}



export function Profile() {

    const [profile, setProfile] = useState({} as InfosProfile)

    async function fetchProfile() {
        const response = await api.get('/users/gabirellucas')
        const data = await response.data       

               const profileData = {
                    name : data.name,
                    image : data.avatar_url,
                    bio : data.bio , 
                    followers : data.followers,
                    userName: data.login
                }
                setProfile(profileData)
    }
    useEffect(() => {
        fetchProfile()
    }, [])
    

    return (
        
        <ProfileContainer>
            <img src={profile.image} alt="" />
            <div>
                <Name>
                    <h1>{profile.name}</h1>
                    <a href="https://github.com/GabirelLucas">GITHUB <ArrowSquareOut size={20} /></a>
                </Name>
                <Description>
                    {profile.bio}
                </Description>
                <SocialLinks>
                    <span>
                        <img src={iconGit} alt=""/>
                        {profile.userName}
                    </span>
                    
                    <span>
                        <img src={followersIcon} alt=""/>
                        {profile.followers} seguidor
                    </span>
                </SocialLinks>
            </div>
        </ProfileContainer>
    )
}