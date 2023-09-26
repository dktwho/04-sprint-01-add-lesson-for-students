import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS': {
      return  {...state, decks: action.decks}
    }
  }
  return state
}

export type DecksActions = ReturnType<typeof setDecksAC>
export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET-DECKS' as const,
    decks
  }
}