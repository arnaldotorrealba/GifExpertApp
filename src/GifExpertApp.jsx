import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  const addCategory = newCategory => {
    // Verificamos que no exista la nueva categoría
    const lowerCaseNewCategory = newCategory.toLowerCase()
    const lowerCaseCategories = categories.map(category =>
      category.toLowerCase()
    )
    if (lowerCaseCategories.includes(lowerCaseNewCategory)) return

    // Actualizamos las categorías
    // setCategories([...categories, 'Valorant'])
    setCategories(cat => [newCategory, ...cat])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={addCategory} />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}
