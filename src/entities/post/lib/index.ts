import { createQueryKeys } from "@lukemorales/query-key-factory"
import { SearchParams } from "../model/Post"

export const postKeys = createQueryKeys("posts", {
  fetch: (props: SearchParams & { searchQuery: string; tag: string }) => [props],
  tags: () => ["tags"],
})
