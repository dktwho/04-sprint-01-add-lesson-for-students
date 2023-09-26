import { useAppDispatch, useAppSelector } from '../app/store.ts'
import { selectDecks } from '../features/decks/decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../features/decks/decks-thunks.ts'


export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return {decks}
}