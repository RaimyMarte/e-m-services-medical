import { useState } from "react"

export const useSidebar = () => {
    const [open, setOpen] = useState(false)

    const handleOnOpen = () => setOpen(true)
    const handleOnClose = () => setOpen(false)


    return {
        open,
        handleOnOpen,
        handleOnClose
    }
}