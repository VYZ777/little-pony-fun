import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCharacters } from '../store/slice.js'
import { CarouselCard } from './Card.jsx'
import { Box } from '@mantine/core'
import { HeaderMegaMenu } from './NavigationMenu.jsx'
import '../styles/styles.css'

const AllCharacters = () => {
  const { characters } = useSelector((state) => state.characters)
  const allCharactersLoading = useSelector((state) => state.characters.loading)
  const dispatch = useDispatch()

  const fetchCharacters = async () => {
    try {
      const characters = await dispatch(fetchAllCharacters())
      return characters
    } catch (err) {
      throw new Error('fetch failed')
    }
  }
  useEffect(() => {
    fetchCharacters()
  }, [])
  if (allCharactersLoading) {
    return (
      <div className='center'>
        <div className='loader'></div>
      </div>
    )
  }
  console.log(characters, 'all characters')
  return (
    <>
      <HeaderMegaMenu></HeaderMegaMenu>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {characters?.map?.((character, index) => {
          return <CarouselCard character={character} key={index} />
        })}
      </Box>
    </>
  )
}

export default AllCharacters
