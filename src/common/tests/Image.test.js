import {Image} from 'common/Image'
import {render, screen, fireEvent} from '@testing-library/react'

test('should render', () => {
    render(<Image />)

    expect(screen.getByRole('img')).toBeTruthy()
})

test('should render hyperlinked image', () => {
    render(<Image altText="hello" img="hello" url="google.com" />)

    expect(screen.getByRole('link')).toBeTruthy()
    expect(screen.getByAltText('hello')).toBeTruthy()
})

test('should render fallback image if error occurred', () => {
    render(<Image fallbackImg="google.ca" />)

    fireEvent.error(screen.getByRole('img'))

    expect(screen.getByRole('img').src).toContain('google.ca')
})

test('should fallback image default to empty string', () => {
    render(<Image />)

    fireEvent.error(screen.getByRole('img'))

    expect(screen.getByRole('img').src).toContain('')
})
