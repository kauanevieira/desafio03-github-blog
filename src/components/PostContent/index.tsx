/* eslint-disable react/no-children-prop */

import ReactMarkdown from 'react-markdown'
import { PostContentContainer } from './styles'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content} />
    </PostContentContainer>
  )
}
