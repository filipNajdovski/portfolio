"use client"
import { useState } from 'react';
import styles from './TabComponent.module.css';
import Card from './Card';
import AppleIcon from './../../images/technologies/apple.svg'
import HtmlIcon from './../../images/technologies/html.svg'
import CssIcon from './../../images/technologies/css.svg'
import GraphqlIcon from './../../images/technologies/graphql.svg'
import JavaScriptIcon from './../../images/technologies/javascript.svg'
import ReactIcon from './../../images/technologies/react.svg'
import VueIcon from './../../images/technologies/vuejs.svg'
import TailwindIcon from './../../images/technologies/tailwindcss.svg'
import TypeScriptIcon from './../../images/technologies/typescript.svg'
import BootstrapIcon from './../../images/technologies/bootstrap.svg'

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
              text='TypeScript'
              icon={TypeScriptIcon}
              altText='TypeScript Icon'
            />

            <Card 
              text='Tailwind CSS'
              icon={TailwindIcon}
              altText='Tailwind CSS Icon'
            />

            <Card 
              text='Bootstrap CSS'
              icon={BootstrapIcon}
              altText='Bootstrap CSS Icon'
            />

            <Card 
              text='React'
              icon={ReactIcon}
              altText='React Icon'
            />

            <Card 
              text='Vue.js'
              icon={VueIcon}
              altText='Vue JS Icon'
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