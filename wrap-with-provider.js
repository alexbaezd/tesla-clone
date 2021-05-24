import { default as React } from "react"
import { Provider } from "react-redux"
import { store } from "./src/app/store"
import { GlobalStyles } from "./src/components/GlobalStyles"

// eslint-disable-next-line react/display-name,react/prop-types
const wrapWithProvider = ({ element }) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      {element}
    </Provider>
  )
}

export default wrapWithProvider
