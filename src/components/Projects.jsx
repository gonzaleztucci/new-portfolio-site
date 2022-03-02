import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  width: 85%;
  @media (max-width: 1000px){
    width: 90%;
  }

  @media (max-width: 680px){
    width: 95%;
  }
`

const Projects = () => {
  return (
    <Container>
            <div className="projects-container" style={{boxShadow: "1px 1px 3px 0px rgba(115,105,102,0.75)"}}>
              <div id="carousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="https://github.com/gonzaleztucci/e-commerce-api" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={require('../images/e-commerce-API.png')} 
                        className="d-block w-100" 
                        alt="e-commerce API"></img>
                    </a>
                    <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"rgba(59, 40, 40, 0.8)", color: "#f6f9fa", borderRadius: "4px"}}>
                      <h5>e-commerce API</h5>
                      <p>ExpressJS e-commerce CRUD API documented with Jest</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <a href="https://github.com/gonzaleztucci/the-munchies-app" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={require('../images/the-munchies-app.png')} 
                        className="d-block w-100" 
                        alt="The Munchies App"></img>
                    </a>
                    <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"rgba(59, 40, 40, 0.8)", color: "#f6f9fa", borderRadius: "4px"}}>
                      <h5>The Munchies App</h5>
                      <p>Full Stack PERN app for reviewing restaurants</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <a href="https://github.com/gonzaleztucci/jammming" target="_blank" rel="noopener noreferrer">
                      <img 
                      src={require('../images/jammming-app.png')} 
                      className="d-block w-100" 
                      alt="Jamming App"></img>
                    </a>

                    <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"rgba(59, 40, 40, 0.8)", color: "#f6f9fa", borderRadius: "4px"}}>
                      <h5>Jammming App</h5>
                      <p>Playlist creation app using React and Spotify API</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <a href="https://github.com/gonzaleztucci/reddit-zero" target="_blank" rel="noopener noreferrer">
                      <img 
                        src={require('../images/reddit-zero.png')}
                        className="d-block w-100" 
                        alt="Reddit Zero app"></img>
                    </a>
                    <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"rgba(59, 40, 40, 0.8)", color: "#f6f9fa", borderRadius: "4px"}}>
                      <h5>Reddit Zero</h5>
                      <p>Simple Reddit client developed with React and Redux</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon arrow" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#carousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon arrow" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>  
            </div>
    </Container>
  )
}

export default Projects