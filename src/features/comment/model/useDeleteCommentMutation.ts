import { useMutation, useQueryClient } from "@tanstack/react-query"
import { commentKeys } from "../lib"
import { deleteComment } from "@/entities/comment/api"

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => deleteComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: commentKeys.fetch._def,
        exact: true,
      })
    },
  })
}
