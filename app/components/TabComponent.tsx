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
        <button className={styles.tab} onClick={() => handleTabClick('tab1')}>Tab 1</button>
        <button className={styles.tab} onClick={() => handleTabClick('tab2')}>Tab 2</button>
        <button className={styles.tab} onClick={() => handleTabClick('tab3')}>Tab 3</button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'tab1' && <div className={styles.tabPane}>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div className={styles.tabPane}>Content for Tab 2</div>}
        {activeTab === 'tab3' && <div className={styles.tabPane}>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default TabComponent;