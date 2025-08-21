import { GoPin } from 'react-icons/go'
import { LuFileSpreadsheet, LuNotebook } from 'react-icons/lu'
import MenuItem from './MenuItem'

const HeaderFileBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <MenuItem Icon={LuFileSpreadsheet} textItem="All Notes" />
      <MenuItem Icon={GoPin} textItem="Pinned Notes" />
      <MenuItem Icon={LuNotebook} textItem="Notebooks" />
    </div>
  )
}
export default HeaderFileBar
