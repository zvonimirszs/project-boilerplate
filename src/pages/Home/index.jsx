import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'storybook-project/dist/';
import { Card } from 'storybook-project/dist/';
import { connect } from 'react-redux';
// import './index.css';
import styles from './index.css';
import { increase } from './action';

const beers = require('./beers');

class Home extends React.Component {
  handleClick() { 
    return beers.map(beer => (<Card
      key={beer.id}
      imgUrl={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}
      description={beer.description}
    />));
  }
  constructor(props) {
    super(props);
    this.printA = this.printA.bind(this);
  }

  printA() {
    console.log(this.props.abc);
  }
  render() {
    const cards = this.handleClick();
    console.log(cards);
    console.log(beers)
    return (
      <div className="home">
        <h1> Hello World!</h1>
        <span>{this.props.number}</span>
        <button onClick={this.props.increase1}>+1</button>
        <button onClick={this.props.increase100}>+100</button>
        <button onClick={this.printA}>print A</button>
        <h4>Links:</h4>
        {cards}
        <Button text="KLIKNI ME" onClick={this.handleClick} />
        <Button text="KLIKNI ME" disabled />
        <span>{this.props.abc}</span>
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

        <span>{this.props.abc}</span>
        <div className="row">{this.props.card}</div>
        <div className={styles.customHome} >
          <Link href="a" to="/somethingNotFound"> Go to Not Found page! </Link>
          <Link href="a" to="/about"> Go to About page! </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state.home.number,
  abc: 3,
  card: 3,
}
);

const mapDispatchProps = dispatch => ({
  increase1: () => dispatch(increase(1)),
  increase100: () => dispatch(increase(100)),
});

export default connect(
  mapStateToProps,
  mapDispatchProps,
)(Home);
