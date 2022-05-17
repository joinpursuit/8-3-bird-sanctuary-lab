renderBirdData = (birdsData) => {
    return birdsData.map((bird) => {
      return (
        <article className="birds card" key={bird.id}>
            <p>
            <strong>{bird.name}</strong>
          </p>
          <p>Price: ${bird.amount}</p>
          <img src={bird.img} alt="bird"></img>
          <Button variant="dark" onClick={() => this.clickedAdopt(bird)}>
            ADOPT
          </Button>
        </article>
      )
            clickedAdopt = (bird) => {
            let newCart = this.state.cartArr;
    newCart.push(bird);

    this.setState({
        cartArr: newCart,
    });
};

  handleSubmit = () => {
    this.setState({
      cartArr: [],
    });
  };

  <>
  <CartComp cartArr={cartArr} />
  <section id="birdSection">{this.renderBirdData(birdsData)}</section>
  <CheckoutComp handleSubmit={this.handleSubmit} />
      </>
    })
};