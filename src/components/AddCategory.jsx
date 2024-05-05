import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = event => {
    setInputValue(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    const newInput = inputValue.trim()

    if (newInput.length <= 1) return

    onNewCategory(newInput)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='buscar gifs....'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
