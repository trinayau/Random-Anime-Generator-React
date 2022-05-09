import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteButton from '.';

describe('DeleteButton', () => {
    test('it calls a handleClick prop when clicked', () => {
        const stubHandleClick = jest.fn();
        render(<DeleteButton handleClick={stubHandleClick} />)
        let btn = screen.getByRole('button', { name: 'delete' })
        userEvent.click(btn)
        expect(stubHandleClick).toHaveBeenCalledTimes(1);
    })
});
