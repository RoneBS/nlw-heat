import { useEffect } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../services/api'

import * as S from './styles'

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export const LoginBox = () => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=fc47c9cc8481ec3837f7`

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data

    localStorage.setItem('@dowhile:token', token)

    console.log(user)
  }

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')

      // console.log({ urlWithoutCode, githubCode })

      window.history.pushState({}, '', urlWithoutCode)  
      
      signIn(githubCode)
    }
  }, [])

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