const { render, screen } = require("@testing-library/react")
const { PublicRoute } = require("../../src/router/PublicRoute")
const { BrowserRouter } = require("react-router")
const { Routes } = require("react-router")
const { Route } = require("react-router")

describe('Pruebas en <PublicRoute />', () => {
  test('Debe mostrar el children si no esta autenticado', () => {
    render(
        <BrowserRouter>
            <PublicRoute>
                <h1>Ruta Publica</h1>
            </PublicRoute>
        </BrowserRouter>
    )
    
  })
  test('Debe navegar si esta autenticado', () => {
 
    
  })
  
})
