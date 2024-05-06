import { fireEvent, render, screen } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {
  const newCategory = 'Dragon Ball'

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifExpertApp />)
    expect(container).toMatchSnapshot()
  })

  test('debe agregar una nueva categoría', () => {
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.change(input, { target: { value: newCategory } })
    fireEvent.submit(form)

    // screen.debug()
    expect(screen.getAllByRole('heading', { level: 3 })[0].innerHTML).toBe(
      newCategory
    )
  })

  test('no debe agregar una nueva categoría si ya existe', () => {
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.change(input, { target: { value: 'Valorant' } })
    fireEvent.submit(form)
    fireEvent.change(input, { target: { value: 'VALORANT' } })
    fireEvent.submit(form)
    fireEvent.change(input, { target: { value: ' VALoraNT  ' } })
    fireEvent.submit(form)

    expect(
      screen.getAllByRole('heading', { level: 3 }).length
    ).not.toBeGreaterThan(2)
  })
})
