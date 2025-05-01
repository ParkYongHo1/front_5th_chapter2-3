import { useModalStore } from "../model"
import { Dialog } from "./Dialog"

export function Modal() {
  const { isOpen, content, closeModal } = useModalStore()

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      {content}
    </Dialog>
  )
}
