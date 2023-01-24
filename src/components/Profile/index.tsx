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
  const { profiles } = useContext(ProfilesContext)

  return (
    <ContainerProfile>
      <img src={profiles.img} alt="" />

      <AboutPeople>
        <People>
          <h1>{profiles.name}</h1>

          <a href={profiles.linkGithub} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowUpRight />
          </a>
        </People>

        <DescriptionPeople>
          <p>{profiles.bio}</p>

          <Social>
            <ul>
              <li>
                <GithubLogo /> {profiles.github}
              </li>
              <li>
                <Buildings /> {profiles.work === null ? 'Null' : profiles.work}
              </li>
              <li>
                <Users size={16} weight="bold" /> {profiles.followers}
              </li>
            </ul>
          </Social>
        </DescriptionPeople>
      </AboutPeople>
    </ContainerProfile>
  )
}
