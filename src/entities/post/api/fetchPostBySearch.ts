import { PostResponse } from "../model/Post"

export const fetchPostBySearch = async (searchQuery: string) => {
  const response = await fetch(`/api/posts/search?q=${searchQuery}`)
  const data: PostResponse = await response.json()
  return data
}
