import * as S from './App.styles'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

export function App() {
  return (
    <S.ContentWrapper>
      <MessageList />
      <LoginBox />
    </S.ContentWrapper>
   
  )
}

export default App
