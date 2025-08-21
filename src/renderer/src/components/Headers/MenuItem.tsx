import { IconType } from 'react-icons'

type ListItem = {
  Icon: IconType
  textItem: string
}
const MenuItem = ({ Icon, textItem }: ListItem) => {
  return (
    <div className="flex items-center gap-2">
      <Icon />
      <span>{textItem}</span>
    </div>
  )
}

export default MenuItem
