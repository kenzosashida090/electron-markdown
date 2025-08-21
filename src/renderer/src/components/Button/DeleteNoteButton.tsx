import { FaRegTrashCan } from 'react-icons/fa6'
import ActionButton, { ActionButtonProp } from './ActionButton'
const DeleteNoteButton = ({ ...props }: ActionButtonProp) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}

export default DeleteNoteButton
