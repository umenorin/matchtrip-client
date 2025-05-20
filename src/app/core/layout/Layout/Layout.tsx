import Header from '../Header/Header';
import './Layout.scss';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Header/> {/* Aqui o Header será renderizado */}
        <main>
          <Outlet /> {/* Aqui o Match será renderizado */}
        </main>
    </>
  );
}
