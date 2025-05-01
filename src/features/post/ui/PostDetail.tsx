import { DialogContent, DialogHeader, DialogTitle } from "@/shared/ui"
import { useSearchParams } from "react-router-dom"
import { PostWithUser } from "@/entities/post/model/Post"
import { CommentList } from "@/features/comment/ui/CommentList"
import { HighlightText } from "@/shared/ui/HighlightText"

interface PostDetailProps {
  post: PostWithUser
}

export function PostDetail(props: PostDetailProps) {
  const { post } = props
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search") ?? ""

  return (
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle>
          <HighlightText text={post?.title} highlight={searchQuery} />
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <p>
          <HighlightText text={post?.body} highlight={searchQuery} />
        </p>
        <CommentList postId={post.id} />
      </div>
    </DialogContent>
  )
}
