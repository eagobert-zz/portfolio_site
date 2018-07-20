import React, { Component } from 'react'

class Portfolio extends Component {
    render() {
        return (
            // <!-- Portfolio -->
            <section class="content-section" id="portfolio">
                {/* <!-- empty divider --> */}
                <nav class="navbar navbar-light bg-light">
                    <span class="p-4"></span>
                </nav>

                {/* <!-- Portfolio Header --> */}
                <div class="row pl-5">
                    <h1 class="col text-muted pl-4">Portfolio</h1>
                </div>

                {/* <!-- Begin Portfolio Carousel --> */}
                <div class="container">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="./lib/node_modules/startbootstrap-stylish-portfolio/img/portfolio-1.jpg" alt="First slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Portfolio 1</h5>
                                    <p>I don't think we can perform our new song, The Recipe For Concentrated Dark Matter for a crowd this tiny!</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="./lib/node_modules/startbootstrap-stylish-portfolio/img/portfolio-2.jpg" alt="Second slide" />

                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Portfolio 2</h5>
                                    <p>Nice one, Ms Pancakes. Full disclosure, Morty - it's not. </p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="./lib/node_modules/startbootstrap-stylish-portfolio/img/portfolio-3.jpg" alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Portfolio 3</h5>
                                    <p>Temporary superintelligence is just a side effect of the Megaseeds dissolving in your rectal cavity.</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
export default Portfolio