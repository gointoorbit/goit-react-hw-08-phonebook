import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.navLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.navLink}>
        Log in
      </NavLink>
    </div>
  );
};
