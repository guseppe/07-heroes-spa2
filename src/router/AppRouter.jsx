import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "../auth"
import { MarvelPage, DcPage } from "../heroes"
import { Navbar } from "../ui"
import { HeroesRouter } from "../heroes/routes/HeroesRouter"
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/*" element={
            <HeroesRouter />
          } />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={
            <LoginPage />
          } />
        </Route>

        {/* <Route path='/login' element={<LoginPage />}/> */}
        {/* <Route path="/*" element={<HeroesRouter/>}/> */}
      </Routes>
    </>
  )
}


