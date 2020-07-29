import React, { FC } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserContextProvider from './contexts/user'
import { Search } from './components/Search/Search'
import { UserInfo } from './components/UserInfo'
import { TopRepos } from './components/TopRepos/TopRepos'

const App: FC = () => {
  return (
    <UserContextProvider>
      <Search />
      <UserInfo />
      <TopRepos />
    </UserContextProvider>
  )
}

export default App
