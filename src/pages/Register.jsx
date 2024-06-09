import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm.jsx';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <main>
        <RegisterForm />
      </main>
    </>
  );
};

export default Register;
