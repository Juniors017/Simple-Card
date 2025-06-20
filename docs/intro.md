---
title: Simple Card
description: Create a reusable Card component for your Docusaurus site that can be customized with different parts, colors and sizes.
additionalContributors: 
  - login: Juniors017
    html_url: https://github.com/Juniors017
    avatar_url: https://avatars.githubusercontent.com/u/97809069?v=4
---


<div className="avatar margin-bottom--lg">
<img
  className="avatar__photo avatar__photo--xs " 
  src="https://avatars.githubusercontent.com/u/97809069?v=4" />
<div className="avatar__intro">
  <div className="avatar__name">[Docux (Juniors017)](https://github.com/Juniors017) </div>
  
</div>
</div>

The [Infima CSS framework](https://infima.dev/) provides a set of utility classNamees that can be used to stylize cards in Docusaurus. 
This article will cover how to create a reusable cards component for your Docusaurus site which can be personalized with different colors and sizes. 
The component will create all the cards available in Infima and "Custom" cards, you will be able to create and personalize each card independently of each other

The component is in fact a set of small components that will admit to form the cards.
### SimpleCard : composition of the master folder
 - Card component (The container of alls parts)
 - CardHeader component (Header parts of cards)
 - CardBody component (Body parts of cards)
 - CardFooter component (Footer parts of cards)

 We will discover that it pairs wonderfully with other components present in our library but this will be the subject of a dedicated page. 

## Creating the Card component 
Think of this component as the container of all card parts

First we will create the master folder in:  `\src\components\SimpleCard\`. Next we will start by creating a new component called Card. It will be the container component of our different parts to come. Also this will give the possibility to manage className and style for each part.

The component will accept the following props:

- `shadow`: if you want to show a shadow under the map.

Creating the file and adding the source code for the component.

<Tabs groupId="js-ts">
  <TabItem value="js" label="JS">

```javascript title='\src\components\SimpleCard\Card\index.js'
import React,  { CSSProperties } from 'react'; // CSSProperties allows inline styling with better type checking.
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.



const Card = ({
  className, // classNamees for the container card
  style, // Custom styles for the container card
  children,  // for include others parts in
  shadow,  // for add shadow under your card Shadow levels: low (lw), medium (md), top-level (tl)
}) => {
  const cardShadow = shadow ? `item shadow--${shadow}` :'';
  return (
    <div className="card-demo">
    <div className={clsx("card", className, cardShadow)} style={style}>
    {children}
  </div></div>
  );
};


export default  Card;
```

</TabItem>

<TabItem value="ts" label="TS">

```tsx title='\src\components\SimpleCard\Card\index.tsx'
import React, { CSSProperties, ReactNode } from 'react'; // Import types for props
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.

// Define an interface for the component props
interface CardProps {
  className?: string; // Optional className names for the container card
  style?: CSSProperties; // Optional custom styles for the container card
  children: ReactNode; // Content to be included within the card
  shadow?: 'lw' | 'md' | 'tl'; // Optional shadow levels: low (lw), medium (md), top-level (tl)
}

// Build the card component with the specified props
const Card: React.FC<CardProps> = ({
  className, // classNamees for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card
  shadow, // for add shadow under your card Shadow levels: low (lw), medium (md), top-level (tl)
}) => {
  const cardShadow = shadow ? `item shadow--${shadow}` : '';
  return (
    <div className="card-demo">
      <div className={clsx("card", className, cardShadow)} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Card;
```
</TabItem>

</Tabs>

## Creating the CardHeader component
Think of this component as the Header of your futurs cards. Creating the file and adding the source code for the component.The component will accept the following props:

- `textAlign`: The option for text alignment `left` `right` `center` `justify`
- `variant`: (optional)This will be used to apply different colors to the text based on the Infima CSS utility classNamees. The default value is primary.
- `italic`: Default value is false, it's for italic text render
- `noDecoration`: Default value is false, it's for delete text decoration 
- `transform`: The option for transform text to `UPPERCASE TEXT` `lowercase text` or `Capitalize Text` 
- `breakWord`: The option for break text, the text will break at the a word boundary so it will not break in the middle of a word. 
- `truncate`: The option is for very long text that will be truncated if there is not enough space to display it in a single line on the screen. It's truncated by adding... 
- `weight`: The option for text weight `Bold` `Semibold` `Normal` `Light`

<Tabs groupId="js-ts">
  <TabItem value="js" label="JS">

```javascript title='\src\components\SimpleCard\CardHeader\index.js'
import React,  { CSSProperties } from 'react'; // CSSProperties allows inline styling with better type checking.
import clsx from 'clsx'; // clsx helps manage conditional className names in a clean and concise manner.


const CardHeader = ({
  className, // classNamees for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card
  textAlign, 
  variant, 
  italic = false , 
  noDecoration = false, 
  transform, 
  breakWord = false, 
  truncate = false, 
  weight,
}) => {   
  const text = textAlign ? `text--${textAlign}` :'';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';
  return (
    <div className={clsx(
        'card__header',
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
        )} 
        style={style} >
    
    {children}
  </div>
  );
}


export default CardHeader ;

```

</TabItem>

<TabItem value="ts" label="TS">

```tsx title='\src\components\SimpleCard\CardHeader\index.tsx'
import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

interface CardHeaderProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  textAlign?: string;
  variant?: string;
  italic?: boolean;
  noDecoration?: boolean;
  transform?: string;
  breakWord?: boolean;
  truncate?: boolean;
  weight?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  style,
  children,
  textAlign,
  variant,
  italic = false,
  noDecoration = false,
  transform,
  breakWord = false,
  truncate = false,
  weight,
}) => {
  const text = textAlign ? `text--${textAlign}` : '';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';

  return (
    <div
      className={clsx(
        'card__header',
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardHeader;


```
</TabItem>

</Tabs>

## Creating the CardBody component
Think of this component as the body of your futurs cards. Creating the file and adding the source code for the component.The component will accept the following props:

- `textAlign`: The option for text alignment `left` `right` `center` `justify`
- `variant`: (optional)This will be used to apply different colors to the text based on the Infima CSS utility classNamees. The default value is primary.
- `italic`: Default value is false, it's for italic text render
- `noDecoration`: Default value is false, it's for delete text decoration 
- `transform`: The option for transform text to `UPPERCASE TEXT` `lowercase text` or `Capitalize Text` 
- `breakWord`: The option for break text, the text will break at the a word boundary so it will not break in the middle of a word. 
- `truncate`: The option is for very long text that will be truncated if there is not enough space to display it in a single line on the screen. It's truncated by adding... 
- `weight`: The option for text weight `Bold` `Semibold` `Normal` `Light`


<Tabs groupId="js-ts">
  <TabItem value="js" label="JS">

```javascript title='\src\components\SimpleCard\CardBody\index.js'
import React,  { CSSProperties } from 'react';
import clsx from 'clsx'; 



const CardBody = ({
  className, // classNamees for the container card
  style, // Custom styles for the container card
  children, // Content to be included within the card 
  textAlign, 
  variant,
  italic = false , 
  noDecoration = false, 
  transform, 
  breakWord = false, 
  truncate = false, 
  weight,
}) => {   
  const text = textAlign ? `text--${textAlign}` :'';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';
  return (
    <div className={clsx('card__body' , className, text, textType, textColor, textItalic, textDecoration, textBreak, textTruncate, textWeight)} style={style} >
    {children}
  </div>
  );
}


export default CardBody ;


```

</TabItem>

<TabItem value="ts" label="TS">

```tsx title='\src\components\SimpleCard\CardBody\index.tsx'
import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

interface CardBodyProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  textAlign?: string;
  variant?: string;
  italic?: boolean;
  noDecoration?: boolean;
  transform?: string;
  breakWord?: boolean;
  truncate?: boolean;
  weight?: string;
}

const CardBody: React.FC<CardBodyProps> = ({
  className,
  style,
  children,
  textAlign,
  variant,
  italic = false,
  noDecoration = false,
  transform,
  breakWord = false,
  truncate = false,
  weight,
}) => {
  const text = textAlign ? `text--${textAlign}` : '';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';

  return (
    <div
      className={clsx(
        'card__body',
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardBody;



```
</TabItem>

</Tabs>


## Creating the CardImage component
Think of this component as the image cover of your futurs cards. Creating the file and adding the source code for the component.
This component is optionnal, you can use image html and add ```className={clsx("card__image")}```

<Tabs groupId="js-ts">
  <TabItem value="js" label="JS">

```javascript title='\src\components\SimpleCard\CardImage\index.js'
import React,  { CSSProperties } from 'react';
import clsx from 'clsx'; 
import useBaseUrl from '@docusaurus/useBaseUrl'; // Import the useBaseUrl function from Docusaurus


const CardImage = ({
  className, 
  style,
  cardImageUrl,
  alt,
  title,
}) => {   

  const generatedCardImageUrl = useBaseUrl(cardImageUrl);
 
  
  return (
   
    <img
      className={clsx("card__image", className)} style={style}
      src={generatedCardImageUrl} alt={alt} title={title}/>

  );
}


export default CardImage ;



```

</TabItem>

<TabItem value="ts" label="TS">

```tsx title='\src\components\SimpleCard\CardImage\index.tsx'
import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface CardImageProps {
  className?: string;
  style?: CSSProperties;
  cardImageUrl: string;
  alt: string;
  title: string;
}

const CardImage: React.FC<CardImageProps> = ({
  className,
  style,
  cardImageUrl,
  alt,
  title,
}) => {
  const generatedCardImageUrl = useBaseUrl(cardImageUrl);

  return (
      <img
      className={clsx("card__image", className)} style={style}
      src={generatedCardImageUrl} alt={alt} title={title}/>
  );
};

export default CardImage;


```
</TabItem>

</Tabs>










## Creating the CardFooter component
Think of this component as the Footer of your futurs cards. Creating the file and adding the source code for the component.The component will accept the following props:

- `textAlign`: The option for text alignment `left` `right` `center` `justify`
- `variant`: (optional)This will be used to apply different colors to the text based on the Infima CSS utility classNamees. The default value is primary.
- `italic`: Default value is false, it's for italic text render
- `noDecoration`: Default value is false, it's for delete text decoration 
- `transform`: The option for transform text to `UPPERCASE TEXT` `lowercase text` or `Capitalize Text` 
- `breakWord`: The option for break text, the text will break at the a word boundary so it will not break in the middle of a word. 
- `truncate`: The option is for very long text that will be truncated if there is not enough space to display it in a single line on the screen. It's truncated by adding... 
- `weight`: The option for text weight `Bold` `Semibold` `Normal` `Light`


<Tabs groupId="js-ts">
  <TabItem value="js" label="JS">

```javascript title='\src\components\SimpleCard\CardFooter\index.js'
import React,  { CSSProperties } from 'react';
import clsx from 'clsx'; 

const CardFooter = ({
  className, 
  style, 
  children, 
  textAlign, 
  variant,
  italic = false , 
  noDecoration = false, 
  transform, 
  breakWord = false, 
  truncate = false, 
  weight,
}) => {   
  const text = textAlign ? `text--${textAlign}` :'';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';
  return (
    <div className={clsx(
        'card__footer',
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
        )}
        style={style} >
    {children}
  </div>
  );
}


export default CardFooter ;


```

</TabItem>

<TabItem value="ts" label="TS">

```tsx title='\src\components\SimpleCard\CardFooter\index.tsx'
import React, { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

interface CardFooterProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  textAlign?: string;
  variant?: string;
  italic?: boolean;
  noDecoration?: boolean;
  transform?: string;
  breakWord?: boolean;
  truncate?: boolean;
  weight?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({
  className,
  style,
  children,
  textAlign,
  variant,
  italic = false,
  noDecoration = false,
  transform,
  breakWord = false,
  truncate = false,
  weight,
}) => {
  const text = textAlign ? `text--${textAlign}` : '';
  const textColor = variant ? `text--${variant}` : '';
  const textItalic = italic ? 'text--italic' : '';
  const textDecoration = noDecoration ? 'text-no-decoration' : '';
  const textType = transform ? `text--${transform}` : '';
  const textBreak = breakWord ? 'text--break' : '';
  const textTruncate = truncate ? 'text--truncate' : '';
  const textWeight = weight ? `text--${weight}` : '';

  return (
    <div
      className={clsx(
        'card__footer',
        className,
        text,
        textType,
        textColor,
        textItalic,
        textDecoration,
        textBreak,
        textTruncate,
        textWeight
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardFooter;




```
</TabItem>

</Tabs>



## MDX Component Scope
To follow the Docusaurus documentation, we create a theme folder that will host the `MDXComponents` file. This gives us `src\theme\MDXComponents.*`. You may already have a `src\theme` folder or an `MDXComponents` file if so - merge the changes described here with yours.

<DocusaurusButton to="https://docusaurus.io/docs/markdown-features/react#mdx-component-scope" label="Docusaurus Documentation: MDX Component Scope" />

<Tabs groupId="js-ts">
  <TabItem value="js" label="JS">
    ```javascript title="src\theme\MDXComponents.js"
      import React from 'react';
      // Importing the original mapper + our components according to the Docusaurus doc
      import MDXComponents from '@theme-original/MDXComponents';
      import Card from '@site/src/components/SimpleCard/Card';
      import CardBody from '@site/src/components/SimpleCard/CardBody';
      import CardFooter from '@site/src/components/SimpleCard/CardFooter';
      import CardHeader from '@site/src/components/SimpleCard/CardHeader';
      import CardImage from '@site/src/components/SimpleCard/CardImage';
        

      export default {
        // Reusing the default mapping
        ...MDXComponents,
        Card, 
        CardHeader, 
        CardBody, 
        CardFooter, 
        CardImage,
      };
    ```
  </TabItem>
  <TabItem value="ts" label="TS">
    ```tsx title="src\theme\MDXComponents.tsx"


      import React from 'react';
      // Importing the original mapper + our components according to the Docusaurus doc
      import MDXComponents from '@theme-original/MDXComponents';
      import Card from '@site/src/components/SimpleCard/Card';
      import CardBody from '@site/src/components/SimpleCard/CardBody';
      import CardFooter from '@site/src/components/SimpleCard/CardFooter';
      import CardHeader from '@site/src/components/SimpleCard/CardHeader';
      import CardImage from '@site/src/components/SimpleCard/CardImage';


      export default {
        // Reusing the default mapping
        ...MDXComponents,
        Card, 
        CardHeader, 
        CardBody, 
        CardFooter,
        CardImage, 
      };
    ```
  </TabItem>
</Tabs>


## Using the Cards Component in an MDX File

### Basic card

<div className="container ">
<div className="row ">
<div className="col col--6">
<div className="">
  <Card shadow='tl' >
    <CardHeader >
      <h3>Lorem Ipsum</h3>
    </CardHeader>

  <CardBody> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  suspendisse ultrices gravida.
  </CardBody> 


  <CardFooter>

    <button className="button button--secondary button--block">See All</button> 

  </CardFooter> 

  </Card>

</div>
    </div>

    
<div className="col col--6">
<div className="">
  ```html
  <Card shadow='tl' >
    <CardHeader >
      <h3>Lorem Ipsum</h3>
    </CardHeader>

  <CardBody> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  suspendisse ultrices gravida.
  </CardBody> 


  <CardFooter>

    <button className="button button--secondary button--block">See All</button> 

  </CardFooter> 

  </Card>
  ```

</div>
    </div>





### Feed card

<div className="container ">
<div className="row padding-bottom--xl">
<div className="col col--6">
<div className="">
  <Card>
  <CardHeader style={{ backgroundColor: '#205d3b' , color:'black'}}>
<div className="avatar avatar--vertical">
  <img
    className="avatar__photo avatar__photo--xl" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux (@Juniors017)</div>
    <small className="avatar__subtitle">
      humble contributor on:
      <a  style={{ color:'white'}} href="https://docusaurus.community/">@Doc.Community</a>
    </small>
  </div>
</div>
 </CardHeader>
<CardBody style={{ backgroundColor: 'black' , color:'silver'}} className="padding-vert--md" textAlign='center' Transform= 'uppercase'> 
 <h3>Docux Card component</h3>
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
 suspendisse ultrices gravida.
 </CardBody> 


<CardFooter style={{ backgroundColor: '#205d3b' , color:'black'}} className='text--center'> 
<div className="button-group button-group--block">
        <button className="button button--secondary">Like</button>
        <button className="button button--secondary">Comment</button>
        <button className="button button--secondary">Share</button>
      </div>
</CardFooter> 

</Card>

</div>
    </div>
    <div className="col col--6">
<div className="">
  ```html
  <Card>
  <CardHeader style={{ backgroundColor: '#205d3b' , color:'black'}}>
<div className="avatar avatar--vertical">
  <img
    className="avatar__photo avatar__photo--xl"
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux (@Juniors017)</div>
    <small className="avatar__subtitle">
      humble contributor on:
      <a style={{ color:'white'}}  href="https://docusaurus.community/">@Doc.Community</a>
    </small>
  </div>
</div>
 </CardHeader>
<CardBody style={{ backgroundColor: 'black' , color:'silver'}} className="padding-vert--md" textAlign='center' Transform= 'uppercase'> 
 <h3>Docux Card component</h3>
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
 suspendisse ultrices gravida.
 </CardBody> 


<CardFooter style={{ backgroundColor: '#205d3b' , color:'black'}} className='text--center'> 
<div className="button-group button-group--block">
        <button className="button button--secondary">Like</button>
        <button className="button button--secondary">Comment</button>
        <button className="button button--secondary">Share</button>
      </div>
</CardFooter> 

</Card>
```
</div>
    </div>
</div>
    </div>




### Mega Feed card 
<div className="container">
<div className="row padding-bottom--xl">
<div className="col col--6">
<div className="">
  <Card>
  <CardHeader className='padding-top--lg' style={{ backgroundColor: 'rgb(33 126 209)' , color:'black'}}>
<div className="avatar avatar--vertical">
  <img
    className="avatar__photo avatar__photo--xl" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux (@Juniors017)</div>
    <small className="avatar__subtitle">
      humble contributor on:
      <a style={{ color:'white'}} href="https://docusaurus.community/">@Doc.Community</a>
    </small>
  </div>
</div>
 </CardHeader>

 <CardImage style={{ backgroundColor: 'rgb(33 126 209)' , color:'black'}} cardImageUrl="https://img.freepik.com/vecteurs-libre/dino-mignon-jouant-illustration-icone-vecteur-dessin-anime-planche-roulettes-concept-icone-sport-animal-isole_138676-7099.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardBody style={{ backgroundColor: 'white' , color:'#8f600b'}} className="padding-vert--md" textAlign='center' Transform= 'uppercase'> 
 <h3>Docux Card component</h3>
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
 suspendisse ultrices gravida.
 </CardBody>  



<CardFooter style={{ backgroundColor: '#2887bf' , color:'black'}} className='text--center'> 
<div className="button-group button-group--block">
        <button className="button button--secondary">Like</button>
        <button className="button button--secondary">Comment</button>
        <button className="button button--secondary">Share</button>
      </div>
</CardFooter> 

</Card>

</div>
    </div>
    <div className="col col--6">
<div className="">
  ```html
  <Card>
  <CardHeader className='padding-top--lg' style={{ backgroundColor: 'rgb(33 126 209)' , color:'black'}}>
<div className="avatar avatar--vertical">
  <img
    className="avatar__photo avatar__photo--xl" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux (@Juniors017)</div>
    <small className="avatar__subtitle">
      humble contributor on:
      <a style={{ color:'white'}} href="https://docusaurus.community/">@Doc.Community</a>
    </small>
  </div>
</div>
 </CardHeader>

 <CardImage style={{ backgroundColor: 'rgb(33 126 209)' , color:'black'}} cardImageUrl="https://img.freepik.com/vecteurs-libre/dino-mignon-jouant-illustration-icone-vecteur-dessin-anime-planche-roulettes-concept-icone-sport-animal-isole_138676-7099.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardBody style={{ backgroundColor: 'white' , color:'#8f600b'}} className="padding-vert--md" textAlign='center' Transform= 'uppercase'> 
 <h3>Docux Card component</h3>
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
 suspendisse ultrices gravida.
 </CardBody>  



<CardFooter style={{ backgroundColor: '#2887bf' , color:'black'}} className='text--center'> 
<div className="button-group button-group--block">
        <button className="button button--secondary">Like</button>
        <button className="button button--secondary">Comment</button>
        <button className="button button--secondary">Share</button>
      </div>
</CardFooter> 

</Card>

```
</div>
</div>
</div>
    </div>



### Photo card  

<div className="container">
<div className="row padding-bottom--xl">
<div className="col col--6">
<div className="">
  <Card>

 <CardImage cardImageUrl="https://img.freepik.com/vecteurs-libre/dino-triceratops-mignon-illustration-icone-vecteur-dessin-anime-camera-technologie-animale-isolee-plat_138676-6762.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardFooter style={{ backgroundColor: '#e37c77' , color:'black'}} className='text--center'> 
<div className="button-group button-group--block">
        <button className="button button--success">Like</button>
        <button className="button button--warning">Comment</button>
        <button className="button button--danger">Share</button>
      </div>
</CardFooter> 

</Card>

</div>
    </div>
    <div className="col col--6">
<div className="">
  ```html
    <Card>

 <CardImage cardImageUrl="https://img.freepik.com/vecteurs-libre/dino-triceratops-mignon-illustration-icone-vecteur-dessin-anime-camera-technologie-animale-isolee-plat_138676-6762.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardFooter style={{ backgroundColor: '#e37c77' , color:'black'}} className='text--center'> 
<div className="button-group button-group--block">
        <button className="button button--success">Like</button>
        <button className="button button--warning">Comment</button>
        <button className="button button--danger">Share</button>
      </div>
</CardFooter> 

</Card>
```
</div>
    </div>
</div>
    </div>


### Photo card Avatar
<div className="container">
<div className="row padding-bottom--xl">
<div className="col col--6">
<div className="">
  <Card>

 <CardImage cardImageUrl="https://img.freepik.com/vecteurs-libre/dinosaure-mignon-qui-s-etend-icone-vecteur-dessin-anime-illustration-concept-icone-sport-animal-isole-plat_138676-9213.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardFooter style={{ backgroundColor: 'white' , color:'black'}} className='text--center'> 
<div className="avatar">
  <img
    className="avatar__photo avatar__photo--xs" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux humble contributor</div>
    
  </div>
</div>
 
</CardFooter> 

</Card>

</div>
    </div>
    <div className="col col--6">
<div className="">
  ```html
     <Card>

 <CardImage cardImageUrl="https://img.freepik.com/vecteurs-libre/dinosaure-mignon-qui-s-etend-icone-vecteur-dessin-anime-illustration-concept-icone-sport-animal-isole-plat_138676-9213.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardFooter style={{ backgroundColor: 'white' , color:'black'}} className='text--center'> 
<div className="avatar">
  <img
    className="avatar__photo avatar__photo--xs" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux humble contributor</div>
    
  </div>
</div>
 
</CardFooter> 

</Card>


```
</div>
    </div>
</div>
    </div>














### Other Post card


<div className="container">
<div className="row ">
<div className="col col--4">
<div className="">

  <Card shadow='tl'>
  <CardBody style={{ backgroundColor: 'white' , color:'black'}} className="padding-vert--md "Transform= 'uppercase'> 
The Infima CSS  framework provides a set of utility classNamees that can be used to style card in Docusaurus. This article will cover how to create a reusable card component for your Docusaurus site that can be customized with different colors and sizes.
 </CardBody> 
  <CardFooter style={{ backgroundColor: 'red' , color:'black'}} > 

<div className="avatar padding-top--md">
        <img
          className="avatar__photo"
          src="https://avatars.githubusercontent.com/u/97809069?v=4" />
        <div className="avatar__intro">
          <div className="avatar__name">Docux (@Juniors017)</div>
          <small className="avatar__subtitle">
          humble contributor
          </small>
        </div>
</div>
  </CardFooter> 
  </Card>

</div>
    </div>

    <div className="col col--8">
<div className="">
```html
  <Card shadow='tl'>
  <CardBody style={{ backgroundColor: 'white' , color:'black'}} className="padding-vert--md "Transform= 'uppercase'> 
The Infima CSS  framework provides a set of utility classNamees that can be used to style card in Docusaurus. This article will cover how to create a reusable card component for your Docusaurus site that can be customized with different colors and sizes.
 </CardBody> 
  <CardFooter style={{ backgroundColor: 'red' , color:'black'}} > 

<div className="avatar padding-top--md">
        <img
          className="avatar__photo"
          src="https://avatars.githubusercontent.com/u/97809069?v=4" />
        <div className="avatar__intro">
          <div className="avatar__name">Docux (@Juniors017)</div>
          <small className="avatar__subtitle">
          humble contributor
          </small>
        </div>
</div>
  </CardFooter> 
  </Card>
```
</div>
    </div>
</div>
    </div>
</div>
    </div>




### Multi demo card


<div className="container">
<div className="row padding-bottom--xl">
<div className="col col--4">
<div className="">
  <Card>
  <CardHeader className='padding-top--lg' style={{ backgroundColor: '#87dfb8' , color:'black'}}>
<div className="avatar avatar--vertical">
  <img
    className="avatar__photo avatar__photo--xs" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux (@Juniors017)</div>
    <small className="avatar__subtitle" >
      humble contributor on:
      <a href="https://docusaurus.community/" style={{ color:'#1a8870'}}>@Doc.Community</a>
    </small>
  </div>
</div>
 </CardHeader>

 <CardImage style={{ backgroundColor: '#87dfb8' , color:'black'}} cardImageUrl="https://img.freepik.com/vecteurs-libre/crocodile-mignon-jouant-illustration-icone-vecteur-dessin-anime-planche-roulettes-icone-sport-animal-isole-plat_138676-7352.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardBody style={{ backgroundColor: 'black' , color:'silver'}} className="padding-vert--md" textAlign='right' Transform= 'uppercase'> 
 <h3>Docux Card component</h3>
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
 suspendisse ultrices gravida.
 </CardBody>  

</Card>

</div>
    </div>
    <div className="col col--4">
<div className="">
  
  <Card>
  <CardHeader className='padding-top--lg' style={{ backgroundColor: '#7a9f3d' , color:'black'}}>
<div className="avatar">
  <img
    className="avatar__photo avatar__photo--lg" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />
  <div className="avatar__intro">
    <div className="avatar__name">Docux (@Juniors017)</div>
    <small className="avatar__subtitle">
      humble contributor on:
      <a style={{ color:'white'}} href="https://docusaurus.community/">@Doc.Community</a>
    </small>
  </div>
</div>
 </CardHeader>

 <CardImage style={{ backgroundColor: '#7a9f3d' , color:'black'}} cardImageUrl="https://img.freepik.com/vecteurs-libre/dino-mignon-jouant-au-golf-cartoon-vector-icon-illustration-concept-icone-sport-animalier-isole-plat_138676-7100.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardBody style={{ backgroundColor: '#d7de3d' , color:'black'}} className="padding-vert--md" textAlign='justify' Transform= 'uppercase'> 
 <h3 className='text--center'>Docux Card component</h3>
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
 suspendisse ultrices gravida.
 </CardBody>  

</Card>


</div>
    </div>

      <div className="col col--4">
<div className="">
  
  <Card>
  <CardHeader className='padding-vert--md ' style={{ backgroundColor: '#fff2c7' , color:'black'}}>
<div className="avatar avatar--vertical">
  <img
    className="avatar__photo avatar__photo--xl" 
    src="https://avatars.githubusercontent.com/u/97809069?v=4" />

</div>
 </CardHeader>

 <CardImage style={{ backgroundColor: 'black' , color:'black'}}cardImageUrl="https://img.freepik.com/vecteurs-libre/mignon-dino-chef-tenue-spatule-dessin-anime-vecteur-icone-illustration-nourriture-animale-icone-concept-isole_138676-8913.jpg?size=626&ext=jpg&ga=GA1.1.1416347011.1716591654&semt=sph" />

<CardBody style={{ backgroundColor: '#40c43b' , color:'black'}} className="padding-vert--md" textAlign='center' Transform= 'uppercase'> 
 <h3>Docux Card component</h3>
 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
 tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
 suspendisse ultrices gravida.
 </CardBody>  

</Card>


</div>
    </div>
</div>
    </div>

