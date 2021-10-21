import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import * as S from './styles'

import logoImg from '../../assets/logo.svg'

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data)
    })
  },[])

  return(
    <S.MessageListWrapper>
      <img src={logoImg} alt="DoWhile 2021" />
      <S.MessageList>
        {messages.map(message => (
           <S.Message key={message.id}>
            <S.MessageContent>
              {message.text}
            </S.MessageContent>
            <S.MessageUser>
              <S.UserImage>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </S.UserImage>
              <span>{message.user.name}</span>
            </S.MessageUser>
         </S.Message>
        ))
         
        }
      </S.MessageList>
      
    </S.MessageListWrapper>
  )
}