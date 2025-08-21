import { EditorView } from '@codemirror/view'
import {
  codeBlockPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import { githubDark } from '@uiw/codemirror-theme-github'

const MarkdownEditor = () => {
  return (
    <MDXEditor
      markdown={'```js\nconsole.log("hola")\n```'}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
        codeMirrorPlugin({
          codeBlockLanguages: {
            js: 'JavaScript',
            css: 'CSS',
            txt: 'text',
            tsx: 'tsx',
            jsx: 'jsx'
          },

          autoLoadLanguageSupport: true,
          codeMirrorExtensions: [
            githubDark, // base del tema dracula
            EditorView.theme({
              '.cm-gutters': {
                display: 'none'
              }
            })
            //   '.cm-tooltip': {
            //     backgroundColor: '#1e1e2e', // fondo general
            //     color: '#bbbbbb', // color de texto
            //     border: '1px solid #444'
            //   },
            //   '.cm-tooltip.cm-tooltip-autocomplete': {
            //     backgroundColor: '#1e1e2e !important', // fuerza fondo
            //     color: '#f8f8f2 !important',
            //     border: '1px solid #444'
            //   },

            //   /* Lista de sugerencias */
            //   //   '.cm-tooltip-autocomplete': {
            //   //     backgroundColor: '#3e4d40'
            //   //   },

            //   /* Opción seleccionada */
            //   '.cm-tooltip-autocomplete ul li[aria-selected]': {
            //     backgroundColor: '#44475a',
            //     color: '#50fa7b' // texto verde tipo Dracula
            //   },

            //   /* Texto resaltado en la coincidencia */
            //   '.cm-completionMatchedText': {
            //     color: '#bcbcbc',
            //     fontWeight: 'bold'
            //   }
            // })
          ]
        }),
        markdownShortcutPlugin()
      ]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-sm px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-0 prose-p:leading-relaxed prose-headings:my-2 prose-blockquote:my-2 prose-ul:my-1 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}

export default MarkdownEditor
