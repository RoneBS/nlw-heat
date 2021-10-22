import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'

import * as S from './styles'

export const LoginBox = () => {
  const { signInUrl } = useContext(AuthContext)

  return(
    <S.LoginBoxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <S.SignInWithGithub href={signInUrl}>
        <VscGithubInverted size="24"/>
        Entrar com Github
      </S.SignInWithGithub>
    </S.LoginBoxWrapper>
  )
}