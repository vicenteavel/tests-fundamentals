import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const sum = (x: number, y: number) => x + y;

describe('App Component', () => {
  it('should sum correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should render App with hello message', () => {
    render(<App />);

    screen.getByText('Hello world!');
  })

  it('should change message on button click', () => {
    render(<App />);

    screen.getByText("Let's learn more about testing in React");

    const button  = screen.getByText(/change message/i);

    fireEvent.click(button);

    screen.getByText("New message");
  });
})

export default { }