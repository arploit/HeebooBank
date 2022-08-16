import React from 'react';
import { logo } from '../../../assets';
import styles from './NavigationBar.module.less';

const NavigationBar = () => {
	return (
		<nav className={styles['NavBlock']}>
			<img src={logo} alt="Bank logo" className={styles['_Logo']} />
			<ul className={styles['_NavItems']}>
				<li className={styles['_Active']}>Home</li>
				<li>About</li>
				<li>Features</li>
				<li>Solution</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
