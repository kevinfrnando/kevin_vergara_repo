import { render, screen, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import Search from './Search';

test('Should render Search', () => {
    render(<Search/>);
    const label = screen.getByPlaceholderText(/Buscar/i);
    expect( label ).toBeInTheDocument();
});


test('Should search Pokemon on submit search to API', () => {
    const searchPokemon = jest.fn().mockImplementation(() => ({
        json: jest.fn().mockResolvedValue( { status : 200 } ),
    }));
    const { getByTestId } = render(<Search onSubmit={ searchPokemon }/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const form = getByTestId('form');
    form.submit = searchPokemon();
    fireEvent.submit( form );
    expect( searchPokemon ).toHaveBeenCalledTimes( 1 );
});