import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled in the browser window')
}
try {
  contextBridge.exposeInMainWorld('context', {})
} catch (err) {
  console.log(err)
}
