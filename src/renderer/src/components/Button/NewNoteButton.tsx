import { FaFileSignature } from 'react-icons/fa'
import ActionButton, { ActionButtonProp } from './ActionButton'
const NewNoteButton = ({ ...props }: ActionButtonProp) => {
  return (
    <ActionButton {...props}>
      <FaFileSignature className="w-4 h-4 text-zinc-300 " />
    </ActionButton>
  )
}

export default NewNoteButton
