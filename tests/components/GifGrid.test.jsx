import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch'

  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true
  })

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifGrid category={category} />)
    expect(container).toMatchSnapshot()
  })

  test('debe mostrar el loading inicialmente', () => {
    render(<GifGrid category={category} />)

    expect(screen.getByText('Cargando...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy()
  })

  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getAllByRole('img')[0].alt).toBe('Saitama')
    expect(screen.getAllByRole('img')[1].src).toBe('https://localhost/goku.jpg')
  })
})
