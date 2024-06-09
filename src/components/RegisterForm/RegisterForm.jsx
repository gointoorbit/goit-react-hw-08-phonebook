import css from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { nanoid } from 'nanoid';

const nameId = nanoid();
const emailId = nanoid();
const passwordId = nanoid();

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.registerFormContainer}>
      <h2 className={css.formTitle}>Create an account!</h2>
      <form className={css.registerForm} onSubmit={handleSubmit}>
        <label htmlFor={nameId} className={css.registerFormLabel}>
          Name
        </label>
        <input
          id={nameId}
          className={css.registerFormInput}
          type="text"
          name="name"
          required
        ></input>
        <label htmlFor={emailId} className={css.registerFormLabel}>
          Email
        </label>
        <input
          id={emailId}
          className={css.registerFormInput}
          type="email"
          name="email"
          required
        ></input>
        <label htmlFor={passwordId} className={css.registerFormLabel}>
          Password
        </label>
        <input
          id={passwordId}
          className={css.registerFormInput}
          type="password"
          name="password"
          required
        ></input>
        <button type="submit" className={css.registerFormButton}>
          Register
        </button>
      </form>
    </div>
  );
};
