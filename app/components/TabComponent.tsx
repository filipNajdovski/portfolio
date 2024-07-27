"use client"
import { useState } from 'react';
import styles from './TabComponent.module.css';
import Card from './Card';
import AppleIcon from './../../images/technologies/apple.svg'
import HtmlIcon from './../../images/technologies/html.svg'
import CssIcon from './../../images/technologies/css.svg'
import GraphqlIcon from './../../images/technologies/graphql.svg'
import JavaScriptIcon from './../../images/technologies/javascript.svg'

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        <button className={styles.tab} onClick={() => handleTabClick('frontEnd')}>Front End Technologies</button>
        <button className={styles.tab} onClick={() => handleTabClick('backEnd')}>Back End Technologies</button>
        <button className={styles.tab} onClick={() => handleTabClick('webDesign')}>Web Degin UI/UX</button>
        <button className={styles.tab} onClick={() => handleTabClick('testubg')}>Testing Automation/Manual</button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'frontEnd' && 
        <div className={styles.tabPane}>
          <div className="tech-icons gap-2 grid">
            <Card 
              text='Apple'
              icon={AppleIcon}
              altText='Apple Icon'
            />

            <Card 
              text='HTML'
              icon={HtmlIcon}
              altText='HTML Icon'
            />

            <Card 
              text='CSS'
              icon={CssIcon}
              altText='CSS Icon'
            />

            <Card 
              text='JavaScript'
              icon={JavaScriptIcon}
              altText='JavaScript Icon'
            />

            <Card 
              text='GraphQL'
              icon={GraphqlIcon}
              altText='GraphQL Icon'
            />
          </div>
        </div>
        }
        {activeTab === 'backEnd' && 
          <div className={styles.tabPane}>
            <div className="tech-icons gap-2 grid">
              <Card 
                text='Apple'
                icon={AppleIcon}
                altText='Apple Icon'
              />

              <Card 
                text='HTML'
                icon={HtmlIcon}
                altText='HTML Icon'
              />

              <Card 
                text='CSS'
                icon={CssIcon}
                altText='CSS Icon'
              />

              <Card 
                text='JavaScript'
                icon={JavaScriptIcon}
                altText='JavaScript Icon'
              />

              <Card 
                text='GraphQL'
                icon={GraphqlIcon}
                altText='GraphQL Icon'
              />
            </div>
          </div>
        }
        {activeTab === 'webDesign' && 
          <div className={styles.tabPane}>
            <div className="tech-icons gap-2 grid">
              <Card 
                text='Apple'
                icon={AppleIcon}
                altText='Apple Icon'
              />

              <Card 
                text='HTML'
                icon={HtmlIcon}
                altText='HTML Icon'
              />

              <Card 
                text='CSS'
                icon={CssIcon}
                altText='CSS Icon'
              />

              <Card 
                text='JavaScript'
                icon={JavaScriptIcon}
                altText='JavaScript Icon'
              />

              <Card 
                text='GraphQL'
                icon={GraphqlIcon}
                altText='GraphQL Icon'
              />
            </div>
          </div>
        }
        {activeTab === 'testubg' && 
          <div className={styles.tabPane}>
            <div className="tech-icons gap-2 grid">
              <Card 
                text='Apple'
                icon={AppleIcon}
                altText='Apple Icon'
              />

              <Card 
                text='HTML'
                icon={HtmlIcon}
                altText='HTML Icon'
              />

              <Card 
                text='CSS'
                icon={CssIcon}
                altText='CSS Icon'
              />

              <Card 
                text='JavaScript'
                icon={JavaScriptIcon}
                altText='JavaScript Icon'
              />

              <Card 
                text='GraphQL'
                icon={GraphqlIcon}
                altText='GraphQL Icon'
              />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default TabComponent;