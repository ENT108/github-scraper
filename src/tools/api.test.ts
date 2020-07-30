import { Details, Repo } from './../contexts/user.type'
import { apiGetUser, apiGetRepos } from "./api"

test('returns ENT108 profile', async () => {
  const data: Details = await apiGetUser('ENT108')

  expect(data.login).toEqual('ENT108')
})

test('returns user not found', async () => {
  const data: Details = await apiGetUser('ENT108qwe$%^&*')

  expect(data.notFound).toEqual(true)
})

test('returns ENT108 repos', async () => {
  const data: Repo[] = await apiGetRepos('ENT108')

  expect(data.length).toBeGreaterThan(0)
  expect(data[0].name).toEqual('quakejs')
})

test('returns empty array for invalid user name', async () => {
  const data: Repo[] = await apiGetRepos('ENT108qwe$%^&*')

  expect(data.length).toEqual(0)
})