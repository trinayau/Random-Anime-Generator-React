import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DogCard from '.';

describe('DogCard', () => {
    test('it renders an image of given dog', () => {
        let testDog1 = { id: 1, img: 'fake.jpg', liked: false }
        const initState = { loading: true, doggos: [ testDog1 ] }
        renderWithReduxProvider(<DogCard doggo={testDog1}/>, { initState })
        const image = screen.getByRole('img')
        expect(image.src).toContain('fake.jpg')
    })

    test('it renders a clickable like button', async () => {
        let testDog1 = { id: 1, img: 'fake.jpg', liked: false }
        const initState = { loading: true, doggos: [ testDog1 ] }
        renderWithReduxProvider(<DogCard doggo={testDog1}/>, { initState })
        const likeBtn = screen.getByRole('button', { name: 'like'})
        expect(likeBtn.onclick).toBeInstanceOf(Function)
    })

    test('it renders a clickable delete button', async () => {
        let testDog1 = { id: 1, img: 'fake.jpg', liked: false }
        const initState = { loading: true, doggos: [ testDog1 ] }
        renderWithReduxProvider(<DogCard doggo={testDog1}/>, { initState })
        const deleteBtn = screen.getByRole('button', { name: 'delete'})
        expect(deleteBtn.onclick).toBeInstanceOf(Function)
    })
});
