import { Suspense } from "react"

import { PostsTable } from "@/features/post/ui/PostTable"
import { CardContent } from "@/shared/ui"
import Loading from "@/shared/ui/Loading"
import { Pagination } from "@/widgets/ui/layout/Pagination"
import { SearchController } from "@/features/post/ui/SearchController"

export function PostManagerContent() {
  return (
    <CardContent>
      <div className="flex flex-col gap-4">
        <SearchController />
        <Suspense fallback={<Loading />}>
          <PostsTable />
        </Suspense>
        <Pagination />
      </div>
    </CardContent>
  )
}
