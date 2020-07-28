import React, { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserContextProvider from './contexts/user'
import { Search } from './components/Search'
import { UserInfo } from './components/UserInfo'
import { TopRepos } from './components/TopRepos'
import Container from 'react-bootstrap/Container'

const App: FC = () => {
  return (
    <UserContextProvider>
      <Container>
        <Search />
        <UserInfo />
        <TopRepos />
      </Container>
    </UserContextProvider>
  )
}

export default App
