import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const dateFormatter = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy', {
    locale: ptBR,
  })
}
