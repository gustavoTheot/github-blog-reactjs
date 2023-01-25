import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { ProfilesContext } from '../../context/ProfileContext'
import { Issues } from './components/Issues'
import { ContainerHome, CountRepositories, SearchForm } from './style'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const { issue, fetchIssuesData } = useContext(ProfilesContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchGitData(data: SearchFormInputs) {
    const query = `${data.query}`
    fetchIssuesData(query)
  }

  return (
    <ContainerHome>
      <Profile />

      <div>
        <CountRepositories>
          <h1>Publicações</h1>
          <span>{issue.total_count} publicações</span>
        </CountRepositories>
        <SearchForm onSubmit={handleSubmit(handleSearchGitData)}>
          <input
            type="search"
            placeholder="Busca conteúdo"
            {...register('query')}
          />
        </SearchForm>
      </div>
      <Issues />
    </ContainerHome>
  )
}
