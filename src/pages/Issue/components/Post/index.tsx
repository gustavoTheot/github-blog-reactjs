import { useContext } from 'react'
import { ProfilesContext } from '../../../../context/ProfileContext'
import { ContainerReadme, ReadingContent } from './style'

export function Post() {
  const { selectedIssue } = useContext(ProfilesContext)
  return (
    <ContainerReadme>
      <ReadingContent>
        <p>{selectedIssue.body}</p>
      </ReadingContent>
    </ContainerReadme>
  )
}
