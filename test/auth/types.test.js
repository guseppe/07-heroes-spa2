import { types } from "../../src/auth/types/type"

describe('Pruebas en types', () => { 
    test('Debe de regresar los types definidos', () => { 
         expect(types).toEqual({
            login: '[AUTH] Login',
            logout:  '[AUTH] Logout'
        });
    })
})