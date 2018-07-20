import React, { Component } from 'react'

class Portfolio extends Component {
    render() {
        return (
            // <!-- Portfolio -->
            <section className="content-section" id="portfolio">
                {/* <!-- empty divider --> */}
                <nav className="navbar navbar-light bg-light">
                    <span className="p-4"></span>
                </nav>

                {/* <!-- Portfolio Header --> */}
                <div className="row pl-5">
                    <h1 className="col text-muted pl-4">Portfolio</h1>
                </div>

                {/* <!-- Begin Portfolio Carousel --> */}
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="./lib/node_modules/startbootstrap-stylish-portfolio/img/portfolio-1.jpg" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Portfolio 1</h5>
                                    <p>I don't think we can perform our new song, The Recipe For Concentrated Dark Matter for a crowd this tiny!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="./lib/node_modules/startbootstrap-stylish-portfolio/img/portfolio-2.jpg" alt="Second slide" />

                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Portfolio 2</h5>
                                    <p>Nice one, Ms Pancakes. Full disclosure, Morty - it's not. </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="./lib/node_modules/startbootstrap-stylish-portfolio/img/portfolio-3.jpg" alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Portfolio 3</h5>
                                    <p>Temporary superintelligence is just a side effect of the Megaseeds dissolving in your rectal cavity.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
export default Portfolio