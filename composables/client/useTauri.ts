export const useTauri = () => useState<boolean>('tauri', () => {
    if (typeof window !== 'undefined')
        return window['__TAURI_IPC__']
    else return false
})
