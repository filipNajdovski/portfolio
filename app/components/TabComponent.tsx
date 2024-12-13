"use client"
import { useState } from 'react';
import styles from './TabComponent.module.css';
import Card from './Card';
import htmlIcon from './../../images/technologies/html.svg'
import cssIcon from './../../images/technologies/css.svg'
import graphQlIcon from './../../images/technologies/graphql.svg'
import javaScriptIcon from './../../images/technologies/javascript.svg'
import reactIcon from './../../images/technologies/react.svg'
import vueIcon from './../../images/technologies/vuejs.svg'
import tailwindCssIcon from './../../images/technologies/tailwindcss.svg'
import typeScriptIcon from './../../images/technologies/typescript.svg'
import bootstrapIcon from './../../images/technologies/bootstrap.svg'
import angularIcon from './../../images/technologies/angular.svg'
import cypressIcon from './../../images/technologies/cypress.svg'
import expressJsIcon from './../../images/technologies/expressjs.svg'
import firebaseIcon from './../../images/technologies/firebase.svg'
import jestIcon from './../../images/technologies/jest.svg'
import mariaDbIcon from './../../images/technologies/mariadb.svg'
import materializeCssIcon from './../../images/technologies/materializecss.svg'
import mongoDbIcon from './../../images/technologies/mongodb.svg'
import mySqlIcon from './../../images/technologies/mysql.svg'
import nextJsIcon from './../../images/technologies/nextjs.svg'
import nodeJsIcon from './../../images/technologies/nodejs.svg'
import npmIcon from './../../images/technologies/npm.svg'
import phpIcon from './../../images/technologies/php-white.svg'
import postCssIcon from './../../images/technologies/postcss.svg'
import postmanIcon from './../../images/technologies/postman.svg'
import postgresSqlIcon from './../../images/technologies/postgresql.svg'
import wordPressIcon from './../../images/technologies/wordpress.svg'
import laravelIcon from './../../images/technologies/laravel.svg'
import codeIgniter from './../../images/technologies/codeigniter.svg'
import figma from './../../images/technologies/figma.svg'
import photoshop from './../../images/technologies/photoshop.svg'
import illustrator from './../../images/technologies/illustrator.svg'
import afterEffectsIcon from './../../images/technologies/aftereffex.svg'
import mochaIcon from './../../images/technologies/mocha.svg'


const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('frontEnd');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.tabs}>
        <button className={styles.tab} onClick={() => handleTabClick('frontEnd')}>Front End Technologies</button>
        <button className={styles.tab} onClick={() => handleTabClick('backEnd')}>Back End Technologies</button>
        <button className={styles.tab} onClick={() => handleTabClick('webDesign')}>Web Degin UI / UX</button>
        <button className={styles.tab} onClick={() => handleTabClick('testing')}>Testing Automation / Manual</button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'frontEnd' && 
        <div className={styles.tabPane}>
          <div className="tech-icons gap-2 grid">

            <Card 
              text='HTML'
              icon={htmlIcon}
              altText='HTML Icon'
              progress='100'
            />

            <Card 
              text='CSS'
              icon={cssIcon}
              altText='CSS Icon'
              progress='90'
            />

            <Card 
              text='JavaScript'
              icon={javaScriptIcon}
              altText='JavaScript Icon'
              progress='80'
            />

            <Card 
              text='TypeScript'
              icon={typeScriptIcon}
              altText='TypeScript Icon'
              progress='80'
            />

            <Card 
              text='React'
              icon={reactIcon}
              altText='React Icon'
              progress='70'
            />

            <Card 
              text='NextJS'
              icon={nextJsIcon}
              altText='NextJS Icon'
              progress='70'
            />

            <Card 
              text='Vue.js'
              icon={vueIcon}
              altText='Vue JS Icon'
              progress='50'
            />

            <Card 
              text='Angular'
              icon={angularIcon}
              altText='Angular Icon'
              progress='50'
            />

            <Card 
              text='Tailwind CSS'
              icon={tailwindCssIcon}
              altText='TailwindCSS Icon'
              progress='80'
            />

            <Card 
              text='Materialize CSS'
              icon={materializeCssIcon}
              altText='MaterializeCSS Icon'
              progress='60'
            />

            <Card 
              text='Bootstrap CSS'
              icon={bootstrapIcon}
              altText='BootstrapCSS Icon'
              progress='60'
            />

            <Card 
              text='PostCSS'
              icon={postCssIcon}
              altText='PostCSS Icon'
              progress='90'
            />
          </div>
        </div>
        }
        {activeTab === 'backEnd' && 
          <div className={styles.tabPane}>
            <div className="tech-icons gap-2 grid">
              <Card 
                text='PHP'
                icon={phpIcon}
                altText='PHP Icon'
                progress='60'
              />

              <Card 
                text='Node JS'
                icon={nodeJsIcon}
                altText='node.js Icon'
                progress='60'
              />

              <Card 
                text='Laravel'
                icon={laravelIcon}
                altText='Laravel Icon'
                progress='60'
              />

              <Card 
                text='CodeIgniter'
                icon={codeIgniter}
                altText='CodeIgniter Icon'
                progress='50'
              />

              <Card 
                text='GraphQL'
                icon={graphQlIcon}
                altText='GraphQL Icon'
                progress='70'
              />

              <Card 
                text='Express JS'
                icon={expressJsIcon}
                altText='ExpressJS Icon'
                progress='70'
              />

              <Card 
                text='npm'
                icon={npmIcon}
                altText='NPM Icon'
                progress='80'
              />

              <Card 
                text='MySQL'
                icon={mySqlIcon}
                altText='MySQL Icon'
                progress='80'
              />

              <Card 
                text='PostgreSQL'
                icon={postgresSqlIcon}
                altText='PostreSQL Icon'
                progress='50'
              />

              <Card 
                text='MariaDB'
                icon={mariaDbIcon}
                altText='MariaDB Icon'
                progress='80'
              />

              <Card 
                text='MongoDB'
                icon={mongoDbIcon}
                altText='MongoDB Icon'
                progress='80'
              />
              <Card 
                text='FireBase'
                icon={firebaseIcon}
                altText='FireBase Icon'
                progress='70'
              />
              <Card 
                text='WordPress'
                icon={wordPressIcon}
                altText='WordPress Icon'
                progress='80'
              />

            </div>
          </div>
        }
        {activeTab === 'webDesign' && 
          <div className={styles.tabPane}>
            <div className="tech-icons gap-2 grid">
              <Card 
                text='Figma'
                icon={figma}
                altText='Figma Icon'
                progress='80'
              />

              <Card 
                text='Adobe Photoshop'
                icon={photoshop}
                altText='Adobe Photoshop Icon'
                progress='60'
              />

              <Card 
                text='Adobe Illustrator'
                icon={illustrator}
                altText='Adobe Illustrator Icon'
                progress='60'
              />

              <Card 
                text='Adobe After Effects'
                icon={afterEffectsIcon}
                altText='Adobe After Effects Icon'
                progress='50'
              />
            </div>
          </div>
        }
        {activeTab === 'testing' && 
          <div className={styles.tabPane}>
            <div className="tech-icons gap-2 grid">
              <Card 
                text='Postman'
                icon={postmanIcon}
                altText='Postman Icon'
                progress='80'
              />

              <Card 
                text='Cypress JS'
                icon={cypressIcon}
                altText='CypressIo Icon'
                progress='70'
              />

              <Card 
                text='Mocha'
                icon={mochaIcon}
                altText='Mocha Icon'
                progress='60'
              />

              <Card 
                text='Jest'
                icon={jestIcon}
                altText='Jest Icon'
                progress='60'
              />

            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default TabComponent;