import React from 'react';
import classNames from 'classnames'
import styles from '../formiklogin.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from './TextError';
const validationSchema = Yup.object().shape({
	email: Yup.string().email().required('Required'),
	password: Yup.string().required('Required')
});

const initialValues = {
	email: '',
	password: ''
}
export default function FormikLogin() {
	return (
		<div className={styles.container}>
			<div className={styles.screen}>
				<div className={styles.screen__content}>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={(values) => {
							alert(values);
						}}
					>
						<Form className={styles.login}>
							<Field type="text" name="email" placeholder="Email" className={classNames(styles.login__input, styles.login__field)} />
							<ErrorMessage    name="email"  >
								{
									(ErrorMessage)=> <div className='error'>{ErrorMessage}</div>
								}
							</ErrorMessage>
							<Field type="password" name="password" placeholder="Your secret" className={classNames(styles.login__input, styles.login__field)} />
							<ErrorMessage component={TextError} name="password" />
							<button type='submit' className={classNames(styles.button, styles.login__submit)}>
								<span className={styles.button__text}>Log In Now</span>
								<i className={classNames(styles.button__icon, styles.fas)}><FontAwesomeIcon icon={faChevronRight} /></i>
							</button>
						</Form>
					</Formik>
					<div className={styles['social-login']}>
						<h3>log in via</h3>
						<div className={styles['social-icons']}>
							<a href="#" className={classNames(styles['social-login__icon'])}><FontAwesomeIcon icon={faInstagram} /></a>
							<a href="#" className={styles['social-login__icon']}><FontAwesomeIcon icon={faFacebook} /></a>
							<a href="#" className={styles['social-login__icon']} ><FontAwesomeIcon icon={faTwitter} /></a>
						</div>
					</div>
				</div>
				<div className={styles.screen__background}>
					<span className={classNames(styles.screen__background__shape, styles.screen__background__shape4)}></span>
					<span className={classNames(styles.screen__background__shape, styles.screen__background__shape3)}></span>
					<span className={classNames(styles.screen__background__shape, styles.screen__background__shape2)}></span>
					<span className={classNames(styles.screen__background__shape, styles.screen__background__shape1)}></span>
				</div>
			</div>
		</div>)
}
