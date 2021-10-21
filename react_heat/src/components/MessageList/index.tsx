import * as S from './styles'

import logoImg from '../../assets/logo.svg'

export const MessageList = () => {
  return(
    <S.MessageListWrapper>
      <img src={logoImg} alt="DoWhile 2021" />
      <S.MessageList>
        <S.Message>
          <S.MessageContent>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </S.MessageContent>
          <S.MessageUser>
            <S.UserImage>
              <img src="https://github.com/RoneBS.png" alt="Rone Silveira" />
            </S.UserImage>
            <span>Rone Silveira</span>
          </S.MessageUser>
        </S.Message>

        <S.Message>
          <S.MessageContent>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </S.MessageContent>
          <S.MessageUser>
            <S.UserImage>
              <img src="https://github.com/RoneBS.png" alt="Rone Silveira" />
            </S.UserImage>
            <span>Rone Silveira</span>
          </S.MessageUser>
        </S.Message>

        <S.Message>
          <S.MessageContent>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </S.MessageContent>
          <S.MessageUser>
            <S.UserImage>
              <img src="https://github.com/RoneBS.png" alt="Rone Silveira" />
            </S.UserImage>
            <span>Rone Silveira</span>
          </S.MessageUser>
        </S.Message>
      </S.MessageList>
      
    </S.MessageListWrapper>
  )
}