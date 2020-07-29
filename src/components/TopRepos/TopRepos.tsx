import React, { FC, useContext } from 'react'
import { UserContextState, Repo } from '../../contexts/user.type'
import { UserContext } from '../../contexts/user'
import { RepoPill } from './RepoPill'
import Container from 'react-bootstrap/esm/Container'

export const TopRepos: FC = () => {
  const { getState } = useContext(UserContext)
  const { repos }: UserContextState = getState()

  return (
    <Container>
      <section className="repos">
        <span className="header">Top Repositories</span>
        {
          repos.map((repo: Repo) =>
            <RepoPill name={repo.name} url={repo.html_url} key={repo.name} />)
        }
      </section>
    </Container>
  )
}