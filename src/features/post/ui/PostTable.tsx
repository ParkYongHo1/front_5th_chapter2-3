import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/shared/ui"
import { Post } from "./Post"
import { usePostsQuery } from "../model/usePostsQuery"

export function PostsTable() {
  const { postsWithUsers: posts } = usePostsQuery().data

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead className="w-[150px]">작성자</TableHead>
            <TableHead className="w-[150px]">반응</TableHead>
            <TableHead className="w-[150px]">작업</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </TableBody>
      </Table>
    </>
  )
}
