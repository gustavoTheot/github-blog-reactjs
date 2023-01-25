import { ArrowUpRight, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContext } from 'react'
import { ProfilesContext } from '../../context/ProfileContext'

import {
  AboutPeople,
  ContainerProfile,
  DescriptionPeople,
  People,
  Social,
} from './style'

export function Profile() {
  const { profile } = useContext(ProfilesContext)

  return (
    <ContainerProfile>
      <img src={profile.img} alt="" />

      <AboutPeople>
        <People>
          <h1>{profile.name}</h1>

          <a href={profile.linkGithub} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowUpRight />
          </a>
        </People>

        <DescriptionPeople>
          <p>{profile.bio}</p>

          <Social>
            <ul>
              <li>
                <GithubLogo /> {profile.github}
              </li>
              <li>
                <Buildings /> {profile.work === null ? 'Null' : profile.work}
              </li>
              <li>
                <Users size={16} weight="bold" /> {profile.followers}
              </li>
            </ul>
          </Social>
        </DescriptionPeople>
      </AboutPeople>
    </ContainerProfile>
  )
}
