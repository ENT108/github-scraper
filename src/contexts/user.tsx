import React, { createContext, FC, useState } from 'react'
import { apiGetUser, apiGetRepos } from '../tools/api'
import { UserContextState } from './user.type'

export type UserContextProps = UserContextState & {
  getUserData: (userName: string) => void
  getState: () => UserContextState
}

const initialState: UserContextState = {
  details: {
    login: '',
    id: null,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: null,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: '',
    hireable: null,
    bio: '',
    twitter_username: '',
    public_repos: null,
    public_gists: null,
    followers: null,
    following: null,
    created_at: '',
    updated_at: ''
  },
  repos: [],
}

export const UserContext = createContext<UserContextProps>(initialState as UserContextProps)

const UserContextProvider: FC = ({ children }) => {
  const [state, setState] = useState(initialState)
  const getUserData = async (userName: string): Promise<void> =>
    setState({
      details: { ...await apiGetUser(userName) },
      repos: [...await apiGetRepos(userName)].sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1).slice(0, 3)
    })
  const getState = (): UserContextState => state

  return (<UserContext.Provider value={{ ...state, getUserData, getState }}>{children}</UserContext.Provider>)
}

export default UserContextProvider
