import { useContext } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import * as S from './styles'

export const SendMessageForm = () => {
  const { user } = useContext(AuthContext)

  return(
   <S.SendMessageFormWrapper>
     <S.SignOutButton>
       <VscSignOut size="32" />
     </S.SignOutButton>

     <S.UserInformation>
       <S.UserImage>
         <img src={user?.avatar_url} alt={user?.name} />
       </S.UserImage>
       <S.UserName>{user?.name}</S.UserName>
       <S.UserGithub>
         <VscGithubInverted size="16" />
         {user?.login}
       </S.UserGithub>
     </S.UserInformation>

     <S.SendMessageForm>
       <label htmlFor="message">Mensagem</label>
       <textarea 
         name="message" 
         id="message" 
         placeholder="Qual a sua expectativa para o evento?"
       />

       <button type="submit">Enviar mensagem</button>
     </S.SendMessageForm>
   </S.SendMessageFormWrapper>
  )
}