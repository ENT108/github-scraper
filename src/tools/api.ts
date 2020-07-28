import { UserContextState } from './../contexts/user'
// import { UserContextState } from './../contexts/user'
import { Octokit } from '@octokit/core'

export const apiGetUser = async <T>(userName: string): Promise<UserContextState> => {
  const octokit = new Octokit()
  const response = await octokit.request(`GET /users/${userName}`, {
    org: "octokit",
    type: "private",
  }).then((res) => res.data).catch((err) => err)

  return response.data
}