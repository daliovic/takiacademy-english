import { createContext, useState } from 'react'

const styles = {
  isOverlayShown: false,
  setIsOverlayShown: (isOverlayShown: boolean) => {
    console.log("I'm a dummy function 1")
  },
}
type StylesContextProviderType = {
  children: React.ReactNode
  //   isOverlayShown: boolean
  //   setIsOverlayShown: (isOverlayShown: boolean) => void
}

export const StylesContext = createContext(styles)

export const StylesContextProvider = ({ children }: StylesContextProviderType) => {
  const [isOverlayShown, setIsOverlayShown] = useState(false)

  return <StylesContext.Provider value={{ isOverlayShown, setIsOverlayShown }}>{children}</StylesContext.Provider>
}
