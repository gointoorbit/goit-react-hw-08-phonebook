import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm/LoginForm.jsx';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default Login;
