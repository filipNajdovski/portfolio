"use client"
import { useState } from 'react';
import styles from './TabComponent.module.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        <button className={styles.tab} onClick={() => handleTabClick('tab1')}>Front End Technologies</button>
        <button className={styles.tab} onClick={() => handleTabClick('tab2')}>Back End Technologies</button>
        <button className={styles.tab} onClick={() => handleTabClick('tab3')}>Web Degin UI/UX</button>
        <button className={styles.tab} onClick={() => handleTabClick('tab4')}>Testing Automation/Manual</button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'tab1' && <div className={styles.tabPane}>Content for Front End Technologies</div>}
        {activeTab === 'tab2' && <div className={styles.tabPane}>Content for Back End Technologies</div>}
        {activeTab === 'tab3' && <div className={styles.tabPane}>Content for Web Degin UI/UX</div>}
        {activeTab === 'tab4' && <div className={styles.tabPane}>Content for Testing Automation/Manual</div>}
      </div>
    </div>
  );
};

export default TabComponent;