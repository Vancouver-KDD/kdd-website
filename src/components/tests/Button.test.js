import {Button} from 'components/buttons/Button'
import {render, screen, fireEvent} from '@testing-library/react'

test('should render', () => {
    render(<Button />)

    expect(screen.getByRole('button')).toBeTruthy()
})

test('should run prop onClick if available', () => {
    const handleClick = jest.fn()

    render(<Button onClick={handleClick} />)

    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toBeCalled()
})

test('should show prop title as button title', () => {
    const buttonTitle = <span>hello</span>

    render(<Button>{buttonTitle}</Button>)

    expect(screen.getByText('hello')).toBeTruthy()
})
