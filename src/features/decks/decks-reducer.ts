import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as any[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: SetDecksACType): DecksState => {
  switch (action.type) {
    case 'SET/DECKS': {
      return  {...state, decks: action.decks}
    }
  }
  return state
}

export type SetDecksACType = ReturnType<typeof setDecksAC>
export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'SET/DECKS',
    decks
  }
}