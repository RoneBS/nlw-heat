import { VscGithubInverted } from 'react-icons/vsc'

import * as S from './styles'

export const LoginBox = () => {
  return(
    <S.LoginBoxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <S.SignInWithGithub>
        <VscGithubInverted size="24"/>
        Entrar com Github
      </S.SignInWithGithub>
    </S.LoginBoxWrapper>
  )
}