import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = newCategory => {
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
      {/* Título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de Gif */}
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        })}
      </ol>
      {/* Gif Item */}
    </>
  )
}
