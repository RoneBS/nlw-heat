import { useContext, useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import * as S from './styles'

export const SendMessageForm = () => {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    if (!message.trim()) {
      return
    }

    await api.post('messages', { message })

    setMessage('')
  }

  return(
   <S.SendMessageFormWrapper>
     <S.SignOutButton onClick={signOut}>
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

     <S.SendMessageForm onSubmit={handleSendMessage}>
       <label htmlFor="message">Mensagem</label>
       <textarea 
         name="message" 
         id="message" 
         placeholder="Qual a sua expectativa para o evento?"
         onChange={event => setMessage(event.target.value)}
         value={message}
       />

       <button type="submit">Enviar mensagem</button>
     </S.SendMessageForm>
   </S.SendMessageFormWrapper>
  )
}