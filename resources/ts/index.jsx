import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('navigation');

if (rootElement) {
  const root = createRoot(rootElement);

  function Test() {
    return (
      <h1>Hello from React!</h1>
    );
  }

  root.render(<Test />);
} else {
  console.error('Root element not found!');
}