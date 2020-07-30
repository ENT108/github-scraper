import { Details, Repo } from './../contexts/user.type'
import { Octokit } from '@octokit/core'
import { userNotFound } from '../contexts/user'

// TODO provide github token to run more than 60 queries per hour
const token = ''
const octokit = new Octokit({ auth: token })

export const apiGetUser = async (userName: string): Promise<Details> => {
  const response = await octokit.request(`GET /users/${userName}`, {
    org: "octokit",
    type: "private",
  })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err)
      return userNotFound
    })

  return response
}

export const apiGetRepos = async (userName: string): Promise<Repo[]> => {
  const response = await octokit.request(`GET /users/${userName}/repos`, {
    username: userName
  })
    .then((res) => res.data.sort((a: Repo, b: Repo) => (a.stargazers_count < b.stargazers_count) ? 1 : -1).slice(0, 3))
    .catch((err) => {
      console.error(err)
      return []
    })

  return response
}