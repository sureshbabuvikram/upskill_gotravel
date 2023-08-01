import img1 from '../src/assets/1.jpg';
import img2 from '../src/assets/2.jpg';
import img3 from '../src/assets/3.jpg';
import img4 from '../src/assets/4.jpg';
import abtUs from '../src/assets/abt-us.jpg';
import des1 from '../src/assets/des-1.jpg';
import des2 from '../src/assets/des-2.jpg';
import des3 from '../src/assets/des-3.jpg';
import des4 from '../src/assets/des-4.jpg';

import './App.css';

function App() {
  return (
    <div className="App">

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
        <div className="container-fluid m-2">
          <a className="navbar-brand" href="#">
            <h4>Go Travel</h4>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item me-3">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#destination">Destination</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">Contact Us</a>
              </li>

            </ul>
            <form className="d-flex">
              <button className="btn btn-light me-2 px-3" type="submit">SignUp</button>
              <button className="btn btn-outline-light px-3" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>

      {/* banner */}
      <div id="carouselExampleDark" className="carousel carousel-light slide ">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" ></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" ></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4" ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item drk active" data-bs-interval="10000">
            <img src={img1} className="d-block img-fluid " alt="..." />
            <div className="carousel-caption text-white">
              <h3>Enjoy With Your Club &amp; Create Memories</h3>
              <p>Some representative placeholder content for the first slide.</p>
              <button className="btn btn-light py-2 px-4">Explore Now</button>
            </div>
          </div>
          <div className="carousel-item drk" data-bs-interval="2000">
            <img src={img2} className="d-block " alt="..." />
            <div className="carousel-caption  text-white">
              <h3>Breath Taking Destinations</h3>
              <p>Some representative placeholder content for the second slide.</p>
              <button className="btn btn-light py-2 px-4">Explore Now</button>
            </div>
          </div>
          <div className="carousel-item drk">
            <img src={img3} className="d-block" alt="..." />
            <div className="carousel-caption text-white">
              <h3>Experience The Travel Luxury</h3>
              <p>Some representative placeholder content for the third slide.</p>
              <button className="btn btn-light py-2 px-4">Explore Now</button>
            </div>
          </div>
          <div className="carousel-item drk">
            <img src={img4} className="d-block" alt="..." />
            <div className="carousel-caption text-white">
              <h3>Explore the Unexpolored Life Experience</h3>
              <p>Some representative placeholder content for the third slide.</p>
              <button className="btn btn-light py-2 px-4">Explore Now</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* about us */}
      <section>
        <div className="container" id="about">
          <div className="row p-5 justify-content-center align-items-center">
            <div className="col-md-6 mt-5 mb-4">
              <p className="fw-bold text-success text-sm-center text-md-start">About Us</p>
              <h3 className="fw-bold text-sm-center text-md-start">Our Journey is Started With a Determination To Travel All Around This World </h3>
              <p className="text-sm-center text-md-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo accusantium eveniet! Eligendi,
                officia! Minima soluta maxime minus explicabo accusamus amet quaerat optio, saepe hic dolor vel iure
                velit enim?</p>
            </div>

            <div className="col-md-6" style={{ height: '50vh' }}>
              <img src={abtUs} className="img-fluid h-100 w-100" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Destination */}
      <section className="destination" id="destination">
        <div className="container">
          <div className="row justify-content-center m-2">
            <div className="col-lg-6">
              <div className="text-success text-center">Destination</div>
              <h3 className="text-center">Explore The Breath-Taking Adventures With Us</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img src={des1} className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="fw-bold text-center">Get Into Wild In Indonesia</div>
                  <div className="details">
                    <p> 3 Days 4 Nights</p>
                    <p className="fw-bold">Rs:19,999</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img src={des2} className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="fw-bold text-center">Get Into Wild In Indonesia</div>
                  <div className="details">
                    <p> 3 Days 4 Nights</p>
                    <p className="fw-bold">Rs:19,999</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img src={des3} className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="fw-bold text-center">Get Into Wild In Indonesia</div>
                  <div className="details">
                    <p> 3 Days 4 Nights</p>
                    <p className="fw-bold">Rs:19,999</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img src={des4} className="img-fluid" alt="" />
                <div className="card-body">
                  <div className="fw-bold text-center">Get Into Wild In Indonesia</div>
                  <div className="details">
                    <p> 3 Days 4 Nights</p>
                    <p className="fw-bold">Rs:19,999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="carouselExampleControls" className="carousel slide carousel-dark" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="cards">
                      <p className="text-center w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad sit illo itaque, maiores dolores voluptates exercitationem! Molestias illo officiis omnis. Ipsa sed doloribus laboriosam explicabo odit, optio similique dolorem.</p>
                      <p className="name">Elizabath</p>
                      <p className="info">Client</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="cards">
                      <p className="text-center w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad sit illo itaque, maiores dolores voluptates exercitationem! Molestias illo officiis omnis. Ipsa sed doloribus laboriosam explicabo odit, optio similique dolorem.</p>
                      <p className="name">Naveen Patnaik</p>
                      <p className="info">Client</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="cards">
                      <p className="text-center w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad sit illo itaque, maiores dolores voluptates exercitationem! Molestias illo officiis omnis. Ipsa sed doloribus laboriosam explicabo odit, optio similique dolorem.</p>
                      <p className="name">Ahmed Shezath</p>
                      <p className="info">Client</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Subscribe To Our News-Letter</h4>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Agree All the Terms &amp; Services</label>
                </div>
                <button type="submit" className="btn btn-success">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="footer bg-success p-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center text-white">ThIs Website is Created For Educational Purposes Not For Any Commercial Use @2023</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
