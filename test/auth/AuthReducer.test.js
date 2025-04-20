import { AuthReducer } from "../../src/auth"
import { types } from "../../src/auth/types/type"

describe('Pruebas en AuthReducer', () => { 
    const initialState = {
        loggedIn: false,
        user: null
    }
    test('Debe retornar el estado por defector', () => { 
        const newState = AuthReducer(initialState, {})
        expect(newState).toBe(initialState);
    })
    test('Debe el (login) llamar el login, authenticar y establecer el usuario', () => { 
        const action = {
            type: types.login,
            payload: {
                id: 1,
                name: 'Guseppe'
            }
        }
        const newState = AuthReducer(initialState, action)
        // expect(newState.loggedIn).toBeTruthy()
        // expect(newState.user).toBe(action.payload)
        expect(newState).toEqual({
            loggedIn: true,
            user: action.payload
        })
    })
    test('Debe el (logout) borrar el name del usuario y establecer loggenIn en false', () => { 
        const actionLogout = {
            type: types.logout,
            payload: 'Guseppe'
        }
        const newState = AuthReducer(initialState, actionLogout)
        expect(newState.loggedIn).toBeFalsy()
    })
})