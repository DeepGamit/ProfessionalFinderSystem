import React, { Component } from 'react';
import "../../../../assets/vendor/nucleo/css/nucleo.css";
import "../../../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../../../assets/scss/argon-design-system-react.scss";
import Background from '../../../../assets/img/serviceBackgrounds/makeupBg.jpg'
import '../../services.css'
import Scrollspy from 'react-scrollspy'
import Axios from 'axios'


class TVRepair extends Component{

    state = {
        professionals: [],
        userReviews: [],
        seeMore: false,
        seeMoreReviews: false
    }

    componentDidMount(){
        Axios.post('http://localhost:5000/professionals/category',
        {
            category: "TV Repair"
        },{
            "headers": {
              'Content-Type': 'application/json',
            }
          })
          .then(res=>{
            //   const userReviews = this.sortReviews(res.data);
              const reviews = [];
              res.data.map(professional=>professional.reviews.map(review=>reviews.push(review)));
              this.setState({
                  professionals: res.data,
                  userReviews: reviews
              })
          })
          .catch(err=>{
              console.log(err)
          })
    }

    averageUserRatings = () =>{
        let totalSum = 0;
        this.state.userReviews.map(review => totalSum+=parseFloat(review.starsGiven));
        let average = totalSum/this.state.userReviews.length;
        return average.toFixed(1);
    }

    sortReviews = (userReviews) =>{
        const reviewList = [];
        userReviews.map(review => reviewList.push(review));
        reviewList.sort((a,b)=>new Date(b.date) - new Date(a.date));        
        return reviewList;
    }

    getElements = (array) => array.slice(0,2);

    seeMoreOnClick = (e) => {
        this.setState({
            seeMore: true
        })
    }

    seeMoreReviews = (e) =>{
        this.setState({
            seeMoreReviews: true
        })
    }

    render(){
        console.log(this.averageUserRatings());
        console.log(this.state);
        const { professionals } = this.state;
        const tempProfessionals = this.state.seeMore ? professionals : professionals.slice(0,2);
        console.log(tempProfessionals);
        const professionalsList = tempProfessionals.length ? (
            tempProfessionals.map(professional => {
                return(
                    <React.Fragment key={professional._id}>
                        <img src={require("../../../../assets/img/serviceBackgrounds/random.jpg")}></img>
                        <div style={{marginLeft:"120px"}}>
                            <span className="name">{professional.name}</span><br></br><br></br>
                            <p>{professional.address}</p>
                            <span style={{marginTop:"-2px"}} className="rating">&#9733; {professional.ratings} <span style={{marginLeft:"2px", marginRight:"5px",color:"black"}}> ({professional.numberOfRatings} ratings) &emsp; &#x25cf; </span>  {professional.rated5Stars} times rated 5 star</span>
                            <br></br>    
                            <br></br>    
                            {this.getElements(professional.reviews).map(review=>{
                                return(                        
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <div className="initial">{review.name.charAt(0)}</div>
                                        <div className="review" style={{marginLeft:"20px"}}> 
                                        <span className="rname"> {review.name} </span>
                                            <br></br>
                                            <span className="rating"> &#9733; {review.starsGiven} </span>
                                            <p> {review.comment}</p>
                                            <br></br>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </React.Fragment>
                );
            })
        ):(
            <p>Loading...</p>
        );

        const tempReviews = this.state.seeMoreReviews ? this.sortReviews(this.state.userReviews) : this.sortReviews(this.state.userReviews).slice(0,2);
        const reviewsList = tempReviews.length ? (
            tempReviews.map(review=>{
                return(
                    <React.Fragment key={review.date}>
                        <div style={{marginLeft:"30px"}}>
                        <i className="fa fa-quote-left"></i> <br></br>                        
                        &emsp; <span style={{fontSize:"20px", marginTop:"-30px"}}> {review.comment} </span>
                       <br></br>
                       <br></br>
                        <div className="reviewer">                     
                                <div className="initial">{review.name.charAt(0)}</div>
                                <div className="rname">{review.name}</div>
                            </div>
                        </div>
                        <br></br>
                    </React.Fragment>
                );
            })
        ):(
            <p>Loading...</p>
        );

        return(
            <div className="service" style={{backgroundColor:"#F5F5F5"}}>
                <div className="serviceBg" style={{backgroundImage: `url(${Background})`}}>
                    <h2>TV Repair & Installation Service in ****** </h2>
                </div>

                <div className="info">
                    <Scrollspy items={ ['How it Works', 'Professionals', 'Customer Reviews'] } currentClassName="is-current">
                                <li><a active href="#Works">How it Works</a></li>
                                <li><a href="#Professionals">Professionals</a></li>
                                <li><a href="#Reviews">Customer Reviews</a></li>
                    </Scrollspy>
                </div>

                <br></br>
                <div className="infoDescription">
                <section className="info works" id="Works" >
                    <h4>How it works</h4>
                    <hr></hr>
                    <ul>
                        <li>
                            <div>
                                    <img src={require("../../../../assets/img/serviceBackgrounds/icon1.png")}></img>
                                    <div className="verticalLine"></div>
                            </div> 
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Choose the service you need</h5>
                                <p>We provide repairs and installation</p>
                               
                            </div>
                            <hr ></hr>
                        </li>
                        <li>
                            <div>
                                    <img src={require("../../../../assets/img/serviceBackgrounds/icon3.png")}></img>
                                    <div className="verticalLine"></div>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Choose your time-slot</h5>
                                <p>We Service from 9am-9pm</p>
                               
                            </div>
                            <hr ></hr>
                        </li>
                        <li>
                            <div>
                                    <img src={require("../../../../assets/img/serviceBackgrounds/icon2.png")}></img>
                            </div>
                            <p>&emsp;&emsp;</p>
                            <div>
                                <h5>Hassle-free service</h5>
                                <p>Our professional will get in touch with you one hour before the service</p>
                            </div>
                            <hr ></hr>
                        </li>
                    </ul>
                </section>
                <br></br>
                <section className="info professionals" id="Professionals">
                    <h4>TV Repair & Installation Professionals</h4>
                    <h6>{this.state.professionals.length} TV repair & installation professionals in Ahmedabad</h6>
                    <hr></hr>
                    <div className="professionalsDetails">
                        
                        {professionalsList}
                       
                        { !this.state.seeMore &&
                            <div style={{textAlign:"center",padding:"20px"}}>
                                <button onClick={this.seeMoreOnClick}><i className="fa fa-arrow-down"></i>&nbsp;&nbsp;See more</button>
                            </div>
                        }
                        
                    </div>
                    <div >
                    </div>
                </section>
                <br></br>
                <section className="info reviews" id="Reviews">
                    <h4>Recent Customer Reviews</h4>
                    <h6>For TV Services</h6>                   
                    <div className="crating">
                        <span style={{fontSize:"38px", color:"#5300a5", fontWeight:"650"}}>&#9733; {this.averageUserRatings()}</span><span style={{fontSize:"20px", color:"#5300a5", fontWeight:"600"}}>/5</span> &nbsp;based on {this.state.userReviews.length} ratings
                    </div>
                    <hr></hr>
                    {reviewsList}          

                    <div style={{textAlign:"center",padding:"20px"}}>
                        <button onClick={this.seeMoreReviews}><i className="fa fa-arrow-down"></i>&nbsp;&nbsp;View more</button>
                    </div>          
                </section>
                </div>
                <div className="serviceBox">
                    <div className="serviceBoxButtons">
                        <h4>Need a TV Technician for:</h4>
                        <div className="serviceButtonGroup">
                         
                            <button onClick={() => this.props.history.push('/ElectronicRepair/tvRepair/shop/#Repair')}>
                                Repair <i style={{textAlign:"right"}} className="fa fa-chevron-right" />
                            </button> 
                       
                            <button onClick={() => this.props.history.push('/ElectronicRepair/tvRepair/shop/#Installation')}>
                                Installation<i className="fa fa-chevron-right"></i>
                            </button>

                            <button onClick={() => this.props.history.push('/ElectronicRepair/tvRepair/shop/#OtherIssues')}>
                                Other Issues<i className="fa fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="serviceBoxRatings" >
                        <div className="ratings"> 
                            <span style={{fontSize:"26px", color:"#5300a5", fontWeight:"580"}}>&#9733; {this.averageUserRatings()}</span><span style={{fontSize:"20px", color:"#5300a5", fontWeight:"580"}}>/5</span>
                            <p>based on {this.state.userReviews.length} ratings</p>
                        </div>
                        
                       <div className="bookings">   
                           <span style={{fontSize:"25px", color:"black", fontWeight:"580"}}>7,483</span>
                           <p>Bookings done in past month</p>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TVRepair;