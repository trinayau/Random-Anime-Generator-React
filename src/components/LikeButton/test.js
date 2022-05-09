import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LikeButton from '.';

describe('LikeButton', () => {
    let stubHandleClick = jest.fn();

    test('it calls a handleClick prop when clicked', () => {
        render(<LikeButton handleClick={stubHandleClick} />);
        let btn = screen.getByRole('button', { name: 'like' })
        userEvent.click(btn)
        expect(stubHandleClick).toHaveBeenCalledTimes(1);
    })

    test('it renders red content if liked prop is truthy', () => {
        render(<LikeButton liked={true} handleClick={stubHandleClick} />);
        let btn = screen.getByRole('button', { name: 'like' })
        expect(btn.style.color).toBe('red');
    })

    test('it renders white content if liked prop is falsy', () => {
        render(<LikeButton liked={false} handleClick={stubHandleClick} />);
        let btn = screen.getByRole('button', { name: 'like' })
        expect(btn.style.color).toBe('white');
    })
});
