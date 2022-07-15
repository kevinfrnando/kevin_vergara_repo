import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

test('Should render Search', () => {
    render(<Search/>);
    const label = screen.getByPlaceholderText(/Buscar/i);
    expect( label ).toBeInTheDocument();
});

