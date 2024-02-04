import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTRansactionsButton } from './styles'

import LogoImage from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTRansactionsButton>Nova transação</NewTRansactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
