import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

interface Profile {
  id: number
  name: string
  img: string
  bio: string
  github: string
  work: string
  followers: number
  linkGithub: string
}

interface IssuesArray {
  number: number
  id: number
  title: string
  body: string
  created_at: string
}

interface IssueData {
  id: number
  title: string
  items: IssuesArray[]
  body: string
  date?: string
  total_count: number
}

interface SelectedIssue {
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: string
  body: string
  html_url: string
}

interface ProfileContextType {
  profile: Profile
  issue: IssueData
  issuesArray: IssuesArray[]
  selectedIssue: SelectedIssue
  fetchIssuesData: (query?: string) => Promise<void>
  fetchSelectedIssue: (query?: string) => Promise<void>
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfilesContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [issuesArray, setIssuesArray] = useState<IssuesArray[]>([])
  const [issue, setIssue] = useState<IssueData>({} as IssueData)
  const [selectedIssue, setSelectedIssue] = useState<SelectedIssue>(
    {} as SelectedIssue,
  )

  async function fetchProfile() {
    const response = await api.get('/users/gustavoTheot')

    setProfile({
      id: response.data.id,
      name: response.data.name,
      img: response.data.avatar_url,
      bio: response.data.bio,
      github: response.data.login,
      work: response.data.company,
      followers: response.data.followers,
      linkGithub: response.data.html_url,
    })
  }

  async function fetchIssuesData(query?: string) {
    const response = await api.get(
      `https://api.github.com/search/issues?q=${
        query || ''
      }repo:gustavoTheot/github-blog-reactjs`,
    )

    setIssuesArray(response.data.items)
    setIssue(response.data)
  }

  async function fetchSelectedIssue(query?: string) {
    const response = await api.get(
      `/repos/gustavoTheot/github-blog-reactjs/issues/${query}`,
    )

    setSelectedIssue(response.data)
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  useEffect(() => {
    fetchIssuesData()
  }, [])

  return (
    <ProfilesContext.Provider
      value={{
        profile,
        issue,
        issuesArray,
        selectedIssue,
        fetchIssuesData,
        fetchSelectedIssue,
      }}
    >
      {children}
    </ProfilesContext.Provider>
  )
}
