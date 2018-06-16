import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'storybook-project/dist/';
import { Card } from 'storybook-project/dist/';
// import './index.css';
import styles from './index.css';
import beers from '.../beers.json';

export default class Home extends React.Component {
  //handleClick = () => {
  //  beers.map(beer => (<Card
  //    key={beer.id}
  //    imgUrl={beer.image_url}
  //    name={beer.name}
  //    tagline={beer.tagline}
  //    description={beer.description}
  //  />));
  //}
  render() {
    return (
      <div className="home">
        <h1> Hello World!</h1>
        <h4>Links:</h4>
        <Button text="KLIKNI ME" />
        <Button text="KLIKNI ME" disabled />
        <Card
          imgUrl="https://images.punkapi.com/v2/keg.png"
          name="Pivo"
          tagline="Naše pivo"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
          accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis
          eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum."
        />
        

        <div className={styles.customHome} >
          <Link href="a" to="/somethingNotFound"> Go to Not Found page! </Link>
          <Link href="a" to="/about"> Go to About page! </Link>
        </div>
      </div>
    );
  }
}
