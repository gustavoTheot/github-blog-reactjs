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
  const { selectedIssue, profile } = useContext(ProfilesContext)

  return (
    <ContainerAboutRepository>
      <HeaderRepository>
        <NavLink to="/">
          <CaretLeft />
          VOLTAR
        </NavLink>

        <a href={selectedIssue.html_url} target="_blank" rel="noreferrer">
          VER NO GITHUB
          <ArrowUpRight />
        </a>
      </HeaderRepository>

      <TitleRepository>
        <h1>{selectedIssue.title}</h1>
      </TitleRepository>

      <DescriptionRepository>
        <ul>
          <li>
            <GithubLogo /> {profile.github}
          </li>

          <li>
            <Calendar />
            {selectedIssue.created_at}
          </li>

          <li>
            <ChatCircle size={16} weight="bold" /> {selectedIssue.comments}
          </li>
        </ul>
      </DescriptionRepository>
    </ContainerAboutRepository>
  )
}
