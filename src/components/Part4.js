import React from 'react'
import { Row } from "react-bootstrap";
import "../components/style.css"

function Part4() {
    

  return(
    <div>
        <div className="offices section__inner">
		<header className="offices__header">
			<h1>
				Improve the lives of millions.
				Change&nbsp;yours forever
			</h1>
			<p>
				More than 1400 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.
			</p>
		</header>
		<div className="offices__slider">
            <Row>
							<div className="office">
					<a href="/career?&amp;loc=poland#jobs-offers" className="office__inner">
						<div className="office__image">
							<img scr="https://www.docplanner.com/images/warsaw.png" srcset="https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x"/>
						</div>
						<div className="office__desc">
							Warsaw
							<span className="btn btn--small">See openings</span>
						</div>
					</a>
				</div>
							<div className="office ml-4 mr-4">
					<a href="/career?&amp;loc=spain#jobs-offers" className="office__inner">
						<div className="office__image">
							<img scr="https://www.docplanner.com/images/barcelona.png" srcset="https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x"/>
						</div>
						<div className="office__desc">
							Barcelona
							<span className="btn btn--small">See openings</span>
						</div>
					</a>
				</div>
							<div className="office">       
					<a href="/career?&amp;loc=rome#jobs-offers" className="office__inner">
						<div className="office__image">
							<img scr="https://www.docplanner.com/images/istanbul.png" srcset="https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x"/>
						</div>
						<div className="office__desc">
							Istanbul
							<span class="btn btn--small">See openings</span>
						</div>
					</a>
				</div></Row>
                <Row >
							<div className="office">
					<a href="/career?&amp;loc=italy#jobs-offers" className="office__inner">
						<figure className="office__image">
							<img scr="https://www.docplanner.com/images/rome.png" srcset="https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x"/>
						</figure>
						<div className="office__desc">
							Rome
							<span className="btn btn--small">See openings</span>
						</div>
					</a>
				</div>
							<div className="office ml-4 mr-4">
					<a href="/career?&amp;loc=italy#jobs-offers" className="office__inner">
						<figure className="office__image">
							<img scr="https://www.docplanner.com/images/bologna.png" srcset="https://www.docplanner.com/images/bologna.png 1x, https://www.docplanner.com/images/bologna@2x.png 2x"/>
						</figure>
						<div className="office__desc">
							Bologna
							<span className="btn btn--small">See openings</span>
						</div>
					</a>
				</div>
							<div className="office">
					<a href="/career?&amp;loc=brazil#jobs-offers" className="office__inner">
						<figure className="office__image">
							<img scr="https://www.docplanner.com/images/curitiba.png" srcset="https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x"/>
						</figure>
						<div className="office__desc">
							Curitiba
							<span className="btn btn--small">See openings</span>
						</div>
					</a>
				</div></Row>
							<div className="office">
					<a href="/career?&amp;loc=mexico#jobs-offers" className="office__inner">
						<figure className="office__image">
							<img scr="https://www.docplanner.com/images/mexico-city.png" srcset="https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x"/>
						</figure>
						<div className="office__desc">
							Mexico City
							<span className="btn btn--small">See openings</span>
						</div>
					</a>
				</div>
					</div>
	</div>
    </div>
   )

 }

export default Part4