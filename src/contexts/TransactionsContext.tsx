import { ReactNode, useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  currentPage: number
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  changeTransactionPage: (increase: number) => void
}
interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  const pageLimit = 5

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const begin = currentPage * pageLimit
      const end = begin + pageLimit - 1

      const response = await api.get('/transactions', {
        params: {
          _start: begin,
          _end: end,
          _sort: 'createdAt',
          _order: 'desc',
          _limit: pageLimit,
          q: query,
        },
      })

      setTransactions(response.data)
    },
    [currentPage],
  )

  const changeTransactionPage = (increase: number) => {
    setCurrentPage((prevPage) => prevPage + increase)
  }

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data
      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions, currentPage])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        currentPage,
        changeTransactionPage,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
