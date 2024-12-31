import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { HeaederNoAuthComponent } from '@/components/HeaderNoAuth'

describe('HeaederNoAuthComponent', () => {
  const mockLinks = [
    { redirect: '/signin', name: 'Entrar' },
    { redirect: '/signup', name: 'Cadastrar' }
  ]

  it('renders with the correct structure', () => {
    render(<HeaederNoAuthComponent links={mockLinks} />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()

    // Verifica se há um nav dentro do header
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()

    // Verifica se há uma lista dentro do nav
    const ul = screen.getByRole('list')
    expect(ul).toBeInTheDocument()
  })

  it('creates links correctly', () => {
    render(<HeaederNoAuthComponent links={mockLinks} />)

    mockLinks.forEach(link => {
      const anchor = screen.getByRole('link', { name: link.name })
      expect(anchor).toBeInTheDocument()
      expect(anchor).toHaveAttribute('href', link.redirect)
    })
  })

  it('applies hover styles correctly', () => {
    render(<HeaederNoAuthComponent links={mockLinks} />)

    const firstLink = screen.getByRole('link', { name: mockLinks[0].name })

    // Simula o hover no link
    fireEvent.mouseOver(firstLink)

    // Verifica se a classe de hover foi aplicada no pai <li>
    const listItem = firstLink.closest('li')
    expect(listItem).toHaveClass('hover:after:w-full')
  })
})
