import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    const images = await getGifs(category)
    setImages(images)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(img => (
          <li key={img.id}>{img.title}</li>
        ))}
      </ol>
    </>
  )
}
