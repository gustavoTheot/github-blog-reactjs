import { useContext } from 'react'
import { ProfilesContext } from '../../../../context/ProfileContext'
import { ListRepositories } from './style'

export function Repositories() {
  const { repositores } = useContext(ProfilesContext)

  return (
    <ListRepositories>
      {repositores.map((repos) => {
        return (
          <li key={repos.id}>
            <header>
              <h1>{repos.name}</h1>
              <span>{repos.updated_at}</span>
            </header>

            <main>{repos.description}</main>
          </li>
        )
      })}
    </ListRepositories>
  )
}
