import React from 'react'
import './App.css'
import { SocketProvider } from './context/SocketContext'
import { UiProvider } from './context/UiContext'
import { RouterPage } from './pages/RouterPage'

export const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SocketProvider>
  )
}
