import { CaretLeft, CaretRight } from 'phosphor-react'
import { ButtonPagination, PaginationContainer } from './styles'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function Pagination() {
  const changeTransactionPage = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.changeTransactionPage
    },
  )

  //   const currentPage = useContextSelector(TransactionsContext, (context) => {
  //     return context.currentPage
  //   })

  return (
    <PaginationContainer>
      <a onClick={() => changeTransactionPage(-1)}>
        <CaretLeft size={24} />
      </a>
      <div>
        <ButtonPagination variant="checked">1</ButtonPagination>
        <ButtonPagination>2</ButtonPagination>
        <ButtonPagination>3</ButtonPagination>
      </div>
      <a onClick={() => changeTransactionPage(1)}>
        <CaretRight size={24} />
      </a>
    </PaginationContainer>
  )
}
