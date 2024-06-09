import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { nanoid } from 'nanoid';

const emailId = nanoid();
const passwordId = nanoid();

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginFormContainer}>
      <h2 className={css.formTitle}>Log in to get your contact list!</h2>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <label htmlFor={emailId} className={css.loginFormLabel}>
          Email
        </label>
        <input
          id={emailId}
          className={css.loginFormInput}
          type="email"
          name="email"
          required
        ></input>
        <label htmlFor={passwordId} className={css.loginFormLabel}>
          Password
        </label>
        <input
          id={passwordId}
          className={css.loginFormInput}
          type="password"
          name="password"
          required
        ></input>
        <button type="submit" className={css.loginFormButton}>
          Log in
        </button>
      </form>
    </div>
  );
};
