import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuthService from "../../../services/AuthService";
import StatusMessage from "../../../shared/statusMessage/StatusMessage";


const LoginForm = () => {
    const { loginHandler, process, error, clearError } = useAuthService()

    return (<>
        {error && <StatusMessage message={error} clearError={clearError} />}
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Incorrect email address')
                    .required('Required field!'),
                password: Yup.string()
                    .min(6, 'Should be 6 chars minimum')
                    .required('Required field!')
            })}
            onSubmit={values => {
                clearError();
                loginHandler(values);
            }}
        >
            <Form className="form">
                <h1 className="form__title">Login</h1>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    className="form__mail"
                    placeholder="Email"
                />
                <ErrorMessage className="error" name="email" component="div" />
                <Field
                    id="password"
                    name="password"
                    type="password"
                    className="form__password"
                    placeholder="Password"
                />
                <ErrorMessage className="error" name="password" component="div" />
                <button
                    type="submit"
                    className="form__btn"
                    disabled={process === 'loading'}
                >Log in</button>
                <p className="form__subtitle">Don't have an account? <Link to="/signup" className="form__link">SIGN UP</Link></p>
            </Form>
        </Formik>
    </>
    )
}

export default LoginForm;