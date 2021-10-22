import { useContext } from 'react'
import * as S from './App.styles'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'

export function App() {
  const { user } = useContext(AuthContext)

  return (
    <S.ContentWrapper>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox />}
    </S.ContentWrapper>
   
  )
}

export default App
