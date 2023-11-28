import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ActusForm from './actus.form'

describe('<ActusForm />', () => {
    // AAA: Arrange, Act, Assert
    beforeEach(() => {
        render(<ActusForm />);
    })

    it('allows the user to score the MBTI questions in 4 steps', () => {
        let steps = screen.getAllByTestId('step-bubble');
        expect(steps.length).toEqual(4);
    })
    
    it('starts in step 1', () => {
        let steps = screen.getAllByTestId('step-bubble');
        expect(steps[0].className.indexOf('active')).toBeTruthy();
    })
})