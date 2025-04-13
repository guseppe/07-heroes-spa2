import { Navbar } from "../../ui"
import { MarvelPage, DcPage, HeroPage, SearchPage } from "../../heroes"
import { Navigate, Route, Routes } from "react-router"

export const HeroesRouter = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
            <Route path='marvel' element={<MarvelPage/>} />
            <Route path='dc' element={<DcPage/>} />
            <Route path='search' element={<SearchPage/>} />
            <Route path='hero/:id' element={<HeroPage/>} />
            <Route path='/' element={<Navigate to='marvel'/>} />
        </Routes>
      </div>
    </>
  )
}
