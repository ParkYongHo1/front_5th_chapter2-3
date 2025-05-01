import { Card } from "@/shared/ui"
import { Modal } from "@/shared/ui/Modal"
import { PostManagerContent } from "@/widgets/post/ui/PostManagerContent"
import { PostManagerHeader } from "@/widgets/post/ui/PostManagerHeader"

const PostsManagerPage = () => {
  return (
    <>
      <Card className="w-full max-w-6xl mx-auto">
        <PostManagerHeader />
        <PostManagerContent />
      </Card>
      <Modal />
    </>
  )
}

export default PostsManagerPage
