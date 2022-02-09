import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

test('Initial values', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /Terms and Conditions/i });
    expect(checkbox.checked).toEqual(false);

    const confirmButton = screen.getByRole('button', { name: /Confirm order/i });
    expect(confirmButton).toBeDisabled();
});

test('Checkbox disable button in the first click and enable in the second', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /Terms and Conditions/i });
    const confirmButton = screen.getByRole('button', { name: /Confirm order/i });

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test('popover response to hover', async () => {
    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopover = screen.queryByText(/No ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(/No ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
});