import { useMutation, useQueryClient } from "@tanstack/react-query"
import { RequestComment } from "@/entities/comment/model"
import { addComment } from "@/entities/comment/api"
import { commentKeys } from "../lib"

export const useAddCommentMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (comment: RequestComment) => addComment(comment),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentKeys.fetch._def,
        exact: true,
      })
    },
  })
}
