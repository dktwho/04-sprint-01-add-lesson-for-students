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

    case 'DECKS/ADD-DECKS': {
      return  {...state, decks: [action.deck, ...state.decks]}
    }
  }
  return state
}

export type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDecksAC>
export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'DECKS/SET-DECKS' as const,
    decks
  }
}

export const addDecksAC = (deck: Deck) => {
  return {
    type: 'DECKS/ADD-DECKS' as const,
    deck
  }
}