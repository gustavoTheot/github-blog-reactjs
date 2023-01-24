import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfilesContext } from '../../../../context/ProfileContext'
import {
  ContainerAboutRepository,
  DescriptionRepository,
  HeaderRepository,
  TitleRepository,
} from './style'

export function About() {
  const { profiles } = useContext(ProfilesContext)

  /*
  async function fetchRepository(){
    const response = await api.get('/users/gustavoTheot/repos/')
  }
  */
  return (
    <ContainerAboutRepository>
      <HeaderRepository>
        <NavLink to="/">
          <CaretLeft />
          VOLTAR
        </NavLink>

        <a href="#" target="_blank" rel="noreferrer">
          VER NO GITHUB
          <ArrowUpRight />
        </a>
      </HeaderRepository>

      <TitleRepository>
        <h1>Titulo do repositorio</h1>
      </TitleRepository>

      <DescriptionRepository>
        <ul>
          <li>
            <GithubLogo /> {profiles.github}
          </li>
          <li>
            <Calendar /> {profiles.work === null ? 'Null' : profiles.work}
          </li>
          <li>
            <ChatCircle size={16} weight="bold" /> {profiles.followers}
          </li>
        </ul>
      </DescriptionRepository>
    </ContainerAboutRepository>
  )
}
