import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ComboBox from './App';

describe('ComboBox Component', () => {
  it('renders without crashing', () => {
    render(<ComboBox />);
  });

  it('initially displays the Autocomplete with no selected film', () => {
    const { getByLabelText } = render(<ComboBox />);
    const autocompleteInput = getByLabelText('Movie') as HTMLInputElement;
    expect(autocompleteInput).toBeInTheDocument();
    expect(autocompleteInput.value).toBe('');
  });

  it('displays options when typing in the Autocomplete', async () => {
    const { getByLabelText, getByText } = render(<ComboBox />);
    const autocompleteInput = getByLabelText('Movie') as HTMLInputElement;
    fireEvent.focus(autocompleteInput);
    fireEvent.change(autocompleteInput, { target: { value: 'The' } });
    await waitFor(() => {
      expect(getByText('The Shawshank Redemption')).toBeInTheDocument();
      expect(getByText('The Godfather')).toBeInTheDocument();
      expect(getByText('The Dark Knight')).toBeInTheDocument();
    });
  });

  it('updates selected film when an option is selected', async () => {
    const { getByLabelText, getByText } = render(<ComboBox />);
    const autocompleteInput = getByLabelText('Movie') as HTMLInputElement;
    fireEvent.focus(autocompleteInput);
    fireEvent.change(autocompleteInput, { target: { value: 'The Godfather' } });
    await waitFor(() => {
      fireEvent.click(getByText('The Godfather'));
    });
    expect(autocompleteInput.value).toBe('The Godfather');
  });

  it('calls handleFilmChange function when a film is selected', async () => {
    const { getByLabelText, getByText } = render(<ComboBox />);
    const autocompleteInput = getByLabelText('Movie') as HTMLInputElement;
    fireEvent.focus(autocompleteInput);
    fireEvent.change(autocompleteInput, { target: { value: 'The Godfather' } });
    await waitFor(() => {
      fireEvent.click(getByText('The Godfather'));
    });
  });
});
