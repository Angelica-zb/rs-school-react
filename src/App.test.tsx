import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './store/store';
import App from './App';

const store = setupStore();

describe('App', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });

  test('should render the navigation menu', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
