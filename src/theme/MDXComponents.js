import React from 'react';
// Importe le mapper original + nos composants selon la doc docusaurus
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocusaurusButton from '@site/src/components/DocusaurusButton';
import Card from '@site/src/components/SimpleCard/Card';
import CardBody from '@site/src/components/SimpleCard/CardBody';
import CardFooter from '@site/src/components/SimpleCard/CardFooter';
import CardHeader from '@site/src/components/SimpleCard/CardHeader';
import CardImage from '@site/src/components/SimpleCard/CardImage';

export default {
  // Réutilise la correspondance par défaut
  ...MDXComponents,
  // Ajoute la balise "highlight" à notre composant <Highlight> };
  // `Highlight` recevra tous les props qui ont été passés à `<Highlight>` dans MDX
  Highlight,
  // ajout de la balise ImageOnClick je suit le process docu
 
  TabItem,
  Tabs,
  DocusaurusButton,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  CardImage,
};