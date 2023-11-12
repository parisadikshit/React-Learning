import React from "react";
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App, {SignUpForm} from "./App";
describe('App Component',() => {
    test('Renders app component', ()=> {
        const {getByText} = render(<App/>);
        const toggleThemeButton = getByText(/Toggle Theme/i);
        expect(toggleThemeButton).toBeInTheDocument();
    })
    
    test('Toggles theme to dark when clicked on toggle theme button', () => {
        const {getByText} = render(<App/>);
        const toggleThemeButton = getByText(/Toggle Theme/i);
        fireEvent.click(toggleThemeButton);
        expect(getByText(/dark/i)).toBeInTheDocument();

    })
})

describe('SignUpForm Component', ()=> {
    test('Renders SignUpForm', ()=> {
        const {getByTestId} = render(<SignUpForm/>);
        const firstNameInput = getByTestId('first-name-id');
        const lastNameInput = getByTestId('last-name-id');
        const emailInput = getByTestId('email-id');
        const passwordInput = getByTestId('password-id');
        const confirmPasswordInput = getByTestId('confirm-password-id');
    
        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(confirmPasswordInput).toBeInTheDocument();

    })
    
    test('Validates the form and shows the error messages', ()=> {
        const {getByTestId} = render(<SignUpForm/>);

        expect(getByTestId('first-name-error-id')).toBeInTheDocument();
        expect(getByTestId('last-name-error-id')).toBeInTheDocument();
        expect(getByTestId('email-error-id')).toBeInTheDocument();
        expect(getByTestId('password-error-id')).toBeInTheDocument();
        expect(getByTestId('confirm-password-error-id')).toBeInTheDocument();



    })
})