import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from "./Pagination";



const mockFunction = jest.fn();

test('Should render Pagination', () => {
    render(<Pagination/>);
    const backLabel = screen.getByText(/atras/i);
    expect( backLabel ).toBeInTheDocument();  
    const nextLabel = screen.getByText(/siguiente/i);
    expect( nextLabel ).toBeInTheDocument();
});
   

test('Should render Pagination on Found', () => {
    render(<Pagination found = { true }/>);
    const backLabel = screen.getByText("Volver al inicio");
    expect( backLabel ).toBeInTheDocument();  
});
 

test('Should render Pagination on Back button click', () => {
    render(<Pagination found = { true } back = { mockFunction }/>);
    const backLabel = screen.getByText("Volver");
    fireEvent.click( backLabel );
    expect( mockFunction ).toHaveBeenCalledTimes( 1 );
});
   
test('Should render Pagination on Back to start button click', () => {
    render(<Pagination found = { true } backStart = { mockFunction }/>);
    const backLabel = screen.getByText("Volver al inicio");
    fireEvent.click( backLabel );
    expect( mockFunction ).toHaveBeenCalledTimes( 1 );
});

   
test('Should render Pagination on previous page button click', () => {
    render(<Pagination found = { false } previousPage = { mockFunction }/>);
    const backLabel = screen.getByText("Atras");
    fireEvent.click( backLabel );
    expect( mockFunction ).toHaveBeenCalledTimes( 1 );
});

   
test('Should render Pagination on next page button click', () => {
    render(<Pagination found = { false } nextPage = { mockFunction }/>);
    const backLabel = screen.getByText("Siguiente");
    fireEvent.click( backLabel );
    expect( mockFunction ).toHaveBeenCalledTimes( 1 );
}); 