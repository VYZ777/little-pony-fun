import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageCard } from './ImageCard.jsx'
import { fetchImages } from '../store/slice.js'
import { HeaderMegaMenu } from './NavigationMenu.jsx'
import { Box } from '@mantine/core'
import '../styles/styles.css'

const Gallery = () => {
  const { images } = useSelector((state) => state.characters)
  const imagesLoading = useSelector((state) => state.characters.loading)
  const dispatch = useDispatch()
  const fetchImagesData = async () => {
    try {
      const images = await dispatch(fetchImages())
      return images
    } catch (err) {
      throw new Error('fetch failed')
    }
  }
  useEffect(() => {
    fetchImagesData()
  }, [])
  if (imagesLoading) {
    return (
      <div className='center'>
        <div className='loader'></div>
      </div>
    )
  }
  console.log(images, 'all images')
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
        {images?.map?.((character, index) => {
          return <ImageCard character={character} key={index} />
        })}
      </Box>
    </>
  )
}

export default Gallery
