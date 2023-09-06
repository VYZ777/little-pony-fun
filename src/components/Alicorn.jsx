import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CarouselCard } from './Card.jsx'
import { fetchAlicorn } from '../store/slice.js'
import { HeaderMegaMenu } from './NavigationMenu.jsx'
import { Box } from '@mantine/core'
import '../styles/styles.css'

const Alicorn = () => {
  const { alicorn } = useSelector((state) => state.characters)
  const alicornLoading = useSelector((state) => state.characters.loading)
  const dispatch = useDispatch()
  const fetchAlicornData = async () => {
    try {
      const alicorn = await dispatch(fetchAlicorn())
      return alicorn
    } catch (err) {
      throw new Error('fetch failed')
    }
  }
  useEffect(() => {
    fetchAlicornData()
  }, [])
  if (alicornLoading) {
    return (
      <div className='center'>
        <div className='loader'></div>
      </div>
    )
  }
  console.log(alicorn, 'all alicorns')
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
        {alicorn?.map?.((character, index) => {
          return <CarouselCard character={character} key={index} />
        })}
      </Box>
    </>
  )
}

export default Alicorn
