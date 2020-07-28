import React, { createContext, FC, useState } from 'react'
import { apiGetUser } from '../tools/api'

export type UserContextState = {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: false,
  name: string,
  company: string,
  blog: string,
  location: string,
  email: string,
  hireable: false,
  bio: string,
  twitter_username: string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string
} | {}

export type UserContextProps = UserContextState & {
  updateUserContext: (values: Partial<UserContextState>) => void
  getUser: (userName: string) => void
}

const initialState: UserContextState = {
}

export const UserContext = createContext<UserContextProps>(initialState as UserContextProps)

const UserContextProvider: FC = ({ children }) => {
  const [state, setState] = useState(initialState)
  const updateUserContext = (values: Partial<UserContextState>): void => setState({ ...state, ...values })
  const getUser = (userName: string): void => setState({ ...apiGetUser(userName) })

  return (<UserContext.Provider value={{ ...state, updateUserContext, getUser }}>{children}</UserContext.Provider>)
}

export default UserContextProvider
