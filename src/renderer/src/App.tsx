'use strict '
import { Content, FileSidebar, Header, RootLayout, Sidebar } from '@/components'
import ActionButtonsRow from './components/Button/ActionButtonsRow'
import HeaderFileBar from './components/Headers/HeaderFileBar'
import MarkdownEditor from './components/MarkdownEditor'
import NotePreviewList from './components/NotePreviewList'

function App(): React.JSX.Element {
  return (
    <>
      <Header />
      <RootLayout>
        <FileSidebar style={{ scrollbarGutter: 'stable' }} className="p-2">
          <HeaderFileBar />
        </FileSidebar>
        <Sidebar style={{ scrollbarGutter: 'stable' }} className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content
          style={{ backgroundColor: '#2F2F2F' }}
          className="border-l pt-10 px-4 border-l-white/20 z-30"
        >
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
