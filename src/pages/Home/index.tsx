import { useContext } from 'react'
import { Profile } from '../../components/Profile'
import { ProfilesContext } from '../../context/ProfileContext'
import { Repositories } from './components/Repositories'
import { ContainerHome, CountRepositories, SearchForm } from './style'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const { repositores, fetchIssuesGit } = useContext(ProfilesContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const repositoresLength = repositores.length

  function handleSearchGitData(data: SearchFormInputs) {
    const query = `${data.query}`
    fetchIssuesGit(query)
  }

  return (
    <ContainerHome>
      <Profile />

      <div>
        <CountRepositories>
          <h1>Publicações</h1>
          <span>{repositoresLength} publicações</span>
        </CountRepositories>
        <SearchForm onSubmit={handleSubmit(handleSearchGitData)}>
          <input
            type="search"
            placeholder="Busca conteúdo"
            {...register('query')}
          />
        </SearchForm>
      </div>
      <Repositories />
    </ContainerHome>
  )
}
