import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "../auth"
import { MarvelPage, DcPage } from "../heroes"
import { Navbar } from "../ui"
import { HeroesRouter } from "../heroes/routes/HeroesRouter"


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage/>} />
        <Route path="/*" element={<HeroesRouter/>}/>
      </Routes>
    </>
  )
}


