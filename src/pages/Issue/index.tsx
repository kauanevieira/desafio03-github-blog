import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContent } from '../../components/PostContent'
import { PostInfo } from '../../components/PostInfo'
import { api } from '../../lib/axios'
import { IssueContainter } from './styles'

interface IssueData {
  title: string
  githubUrl: string
  creator: string
  createdAt: string
  comments: number
  body: string
}

export function Issue() {
  const { number } = useParams()

  const [issue, setIssue] = useState({} as IssueData)

  useEffect(() => {
    async function getIssue() {
      const { data } = await api.get(
        `repos/kauanevieira/desafio03-github-blog/issues/${number}`,
      )
      const newIssue: IssueData = {
        title: data.title,
        githubUrl: data.html_url,
        creator: data.user.login,
        comments: data.comments,
        createdAt: data.created_at,
        body: data.body,
      }
      setIssue(newIssue)
    }
    getIssue()
  }, [number])
  return (
    <IssueContainter>
      <PostInfo issue={issue} />
      <PostContent content={issue.body} />
    </IssueContainter>
  )
}
