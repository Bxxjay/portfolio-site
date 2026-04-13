import { createRoot } from 'react-dom/client';
import './Stylesheet.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Header />
);