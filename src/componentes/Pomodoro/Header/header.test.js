import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders pomodoro in Header title', () => {
  render(<Header title="Pomodoro Timer" />);
  const appTitle = screen.getByText(/pomodoro/i);
  expect(appTitle).toBeInTheDocument();
});