import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth.js';
import { logOut } from '../../redux/auth/operations.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.menuContainer}>
      <p className={css.userEmail}>{user.email}</p>
      <button
        className={css.logoutButton}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
