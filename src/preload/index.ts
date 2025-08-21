import { contextBridge, ipcRenderer } from 'electron'
ipcRenderer
if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled in the browser window')
}
try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
  })
} catch (err) {
  console.log(err)
}
