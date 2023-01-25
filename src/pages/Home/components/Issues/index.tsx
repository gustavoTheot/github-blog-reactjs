import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfilesContext } from '../../../../context/ProfileContext'
import { dateFormatter } from '../../../../utils/formatter'
import { ListRepositories } from './style'

export function Issues() {
  const { issuesArray, fetchSelectedIssue } = useContext(ProfilesContext)

  function handleEnterPost(number: number) {
    fetchSelectedIssue(String(number))
  }

  return (
    <ListRepositories>
      {issuesArray.map((issue) => {
        return (
          <NavLink
            to="/issue"
            onClick={() => handleEnterPost(issue.number)}
            key={issue.id}
          >
            <li key={issue.id}>
              <header>
                <h1>{issue.title}</h1>
                <span>{dateFormatter(issue.created_at)}</span>
              </header>

              <main>{issue.body}</main>
            </li>
          </NavLink>
        )
      })}
    </ListRepositories>
  )
}
