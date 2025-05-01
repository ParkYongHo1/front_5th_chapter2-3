import { Button, TableCell, TableRow } from "@/shared/ui"
import { Tag } from "@/entities/post/ui"
import { Edit2, MessageSquare, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { PostWithUser } from "@/entities/post/model/Post"
import { useModalStore } from "@/shared/model"
import { useDeletePostMutation } from "../model/useDeletePostMutation"
import { PostDetail } from "./PostDetail"
import { UserModal } from "@/features/user/ui"
import { User } from "@/entities/user/model"
import { PostUpdate } from "./PostUpdate"
import { HighlightText } from "@/shared/ui/HighlightText"

interface PostProps {
  post: PostWithUser
}

export function Post(props: PostProps) {
  const { post } = props
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search") ?? ""

  const { mutate: deletePost } = useDeletePostMutation()
  const { openModal } = useModalStore()

  const openPostDetail = (post: PostWithUser) => {
    openModal(<PostDetail post={post} />)
  }
  const openPostUpdate = (post: PostWithUser) => {
    openModal(<PostUpdate post={post} />)
  }
  const openUserModal = async (user: User) => {
    openModal(<UserModal user={user} />)
  }

  return (
    <TableRow key={post.id}>
      <TableCell>{post.id}</TableCell>
      <TableCell>
        <div className="space-y-1">
          <div>
            <HighlightText text={post.title} highlight={searchQuery} />
          </div>

          <div className="flex flex-wrap gap-1">
            {post.tags?.map((tag, index) => <Tag key={tag + index} tag={tag} />)}
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => openUserModal(post.author)}>
          <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
          <span>{post.author?.username}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-4 h-4" />
          <span>{post.reactions?.likes || 0}</span>
          <ThumbsDown className="w-4 h-4" />
          <span>{post.reactions?.dislikes || 0}</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => openPostDetail(post)}>
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              openPostUpdate(post)
            }}
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => deletePost(post.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
