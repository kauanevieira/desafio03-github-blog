import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchFormContainer } from './styles'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  query: z.string(),
})

interface SearchFormProps {
  getIssues: (query?: string) => void
}

type Query = z.infer<typeof schema>

export function SearchForm({ getIssues }: SearchFormProps) {
  const { register, handleSubmit } = useForm<Query>({
    resolver: zodResolver(schema),
  })

  function searchIssues({ query }: Query) {
    getIssues(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchIssues)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </button>
    </SearchFormContainer>
  )
}
