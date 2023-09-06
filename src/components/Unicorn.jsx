import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CarouselCard } from './Card.jsx'
import { fetchUnicorn } from '../store/slice.js'
import { HeaderMegaMenu } from './NavigationMenu.jsx'
import { Box } from '@mantine/core'
import '../styles/styles.css'

const Unicorn = () => {
  const { unicorn } = useSelector((state) => state.characters)
  const unicornLoading = useSelector((state) => state.characters.loading)
  const dispatch = useDispatch()
  const fetchUnicornData = async () => {
    try {
      const unicorn = await dispatch(fetchUnicorn())
      return unicorn
    } catch (err) {
      throw new Error('fetch failed')
    }
  }
  useEffect(() => {
    fetchUnicornData()
  }, [])
  if (unicornLoading) {
    return (
      <div className='center'>
        <div className='loader'></div>
      </div>
    )
  }
  console.log(unicorn, 'all unicorns')
  return (
    <>
      <HeaderMegaMenu />
      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {unicorn?.map?.((character, index) => {
          return <CarouselCard character={character} key={index} />
        })}
      </Box>
    </>
  )
}

export default Unicorn
