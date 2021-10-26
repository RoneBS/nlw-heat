import React from 'react'
import { ScrollView } from 'react-native'

import { Message } from '../Message'

import { styles } from './styles'

const message = {
  id: '1',
  text: 'mensagem de teste',
  user: {
    name: 'Rone',
    avatar_url: 'https://github.com/RoneBS.png',
  }
}

export function MessageList() {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
      >
      <Message data={message}/>
      <Message data={message}/>
      <Message data={message}/>
    </ScrollView>
  )
}