import { UserContextState } from './../contexts/user'
import { Octokit } from '@octokit/core';

const gitHubToken = '2d1695c4de7af9fa975f68adc1757eda48e2a0ea';

export const apiGetUser = async (userName: string): Promise<UserContextState> => {
  const octokit = new Octokit({ auth: gitHubToken })
  const response = await octokit.request(`GET /users/${userName}`, {
    org: "octokit",
    type: "private",
  })

  return response
}