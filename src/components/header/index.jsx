import { useState } from 'react';
import './header.css';
import { RiMenu3Line } from 'react-icons/ri';
const Header = () => {
  const [cartClicked, setCartClicked] = useState(false);
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/cart', name: 'Cart' },
  ];

  return (
    <>
      <nav>
        <RiMenu3Line onClick={() => setCartClicked(!cartClicked)} className="nav-icon" />
        {
          <ul style={{ top: cartClicked ? '40px' : '-200px' }} className="nav-ul">
            {routes.map((route) => (
              <li key={route.id}>
                <a href={route.path}>{route.name}</a>
              </li>
            ))}
          </ul>
        }
      </nav>
      <div>
        <h1>Memorable Water Bottle</h1>
      </div>
    </>
  );
};

export default Header;
