import styled from 'styled-components'

interface ButtonPagination {
  variant?: 'checked' | 'unchecked'
}

export const PaginationContainer = styled.footer<ButtonPagination>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 2.5rem;

  svg {
    color: ${(props) =>
      props.variant === 'checked'
        ? props.theme['green-500']
        : props.theme['gray-600']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const ButtonPagination = styled.button<ButtonPagination>`
  width: 40px;
  height: 40px;
  padding: 1rem;
  line-height: 1;
  font-weight: bold;
  border: 0;
  outline: none;
  border-radius: 6px;

  color: ${(props) =>
    props.variant === 'checked'
      ? props.theme['gray-100']
      : props.theme['gray-300']};
  background: ${(props) =>
    props.variant === 'checked'
      ? props.theme['green-500']
      : props.theme['gray-600']};
`
