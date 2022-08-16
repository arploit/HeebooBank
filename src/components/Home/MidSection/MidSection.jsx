import React from 'react';
import styles from './MidSection.module.less';
import robot from '../../../assets/robot.png';

const MidSection = () => {
	return (
		<div className={styles['MidSectionBlock']}>
			<div className={styles['_Left']}></div>
			<div className={styles['_right']}>
				<div className={styles['_OqaqueBlock']}></div>
				<img src={robot} alt="Robot hand" className={styles['_robotHand']} />
			</div>
		</div>
	);
};

export default MidSection;
