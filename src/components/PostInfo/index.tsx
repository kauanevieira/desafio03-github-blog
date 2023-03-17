import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faAngleLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  PostInfoContainer,
  PostInfoFooter,
  PostInfoHeader,
  PostInfoTitle,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { intlFormatDistance } from 'date-fns'

interface PostInfoProps {
  issue: {
    title: string
    githubUrl: string
    creator: string
    createdAt: string
    comments: number
  }
}

export function PostInfo({ issue }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faAngleLeft} size="sm" />
          <span>VOLTAR</span>
        </NavLink>

        <a href={issue.githubUrl}>
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </a>
      </PostInfoHeader>

      <PostInfoTitle>{issue.title}</PostInfoTitle>

      <PostInfoFooter>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{issue.creator}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />

          <span>
            {issue.createdAt &&
              intlFormatDistance(new Date(issue.createdAt), new Date())}
          </span>
        </div>

        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>
            {issue.comments}Comentário{issue.comments > 1 && 's'}
          </span>
        </div>
      </PostInfoFooter>
    </PostInfoContainer>
  )
}
