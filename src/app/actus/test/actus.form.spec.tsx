import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ActusForm from './actus.form'

describe('<ActusForm />', () => {
    // AAA: Arrange, Act, Assert
    beforeEach(() => {
        render(<ActusForm />);
    })

    it('allows the user to score the MBTI questions in 4 steps', () => {
        let currentStep = screen.getByTestId('current-step')

        expect(currentStep).toEqual(1);

    })
})