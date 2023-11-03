import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import Children from "../../types/children"
import skillsReducer, { skillsName } from "../slices/skills"
import educationReducer, { educationName } from "../slices/education"


const reducer = {
  [skillsName] : skillsReducer,
  [educationName] : educationReducer,
}

const store = configureStore({ reducer})

const StoreProvider = ({children} : Children)=>{
  return(
    <Provider store={store} >{children}</Provider>
  )
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default StoreProvider