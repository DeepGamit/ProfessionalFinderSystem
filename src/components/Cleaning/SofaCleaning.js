import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { Button } from "reactstrap";
import { Row, Col, Badge } from "reactstrap";
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import { connect } from 'react-redux';
import { toggleCartModal } from '../../actions/toggleCartModal';
import CartModal from '../CartModal';
import { addProductFromDB } from '../../actions/addInputs/addProductFromDB';
import Axios from 'axios';
import ProductCard from './ProductCard';
import LoadingCard from './LoadingCard';


  

class SofaCleaning extends Component {
    constructor(props){
        super(props);
  
        this.state = {
          services: ['3 Sofa Seats','4 Sofa Seats','5 Sofa Seats','6 Sofa Seats']
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/cleaning/sofaCleaning/')
            .then(res=>{
                console.log(res.data);
                res.data.map(product=> this.props.addProductFromDB(product));
                console.log(this.props.cartState);
            })
            .catch(err=>{
                console.log(err)
            });
    }

    getList = (name) =>{
        switch (name) {
            case '3 Sofa Seats':
                return global.threeList;
            case '4 Sofa Seats':
                return global.fourList;
            case '5 Sofa Seats':
                return global.fiveList;
            case '6 Sofa Seats':
                return global.sixList;
            default:
                break;
        }
    }

    

    render() {
        console.log(this.props);
        const { services } = this.state;

        const trimmedServices = services.map(category => category.replace(/\s/g,''));

        const servicesList = (services.length) ? (
            services.map(category=>{
                return(
                    <li key={category}><a href={"#"+category.replace(/\s/g, '')}><Button color="default" outline type="button" style={{marginBottom:"6px",marginLeft:"5%"}}>{category}</Button></a></li>
                )
            })
        ):(
            <li><a href={"#fetching"}><Button color="default" outline type="button" style={{marginBottom:"6px"}}>Fetching...</Button></a></li>
        );

        
        const threeSeatsCategory = [];
        for(var product in this.props.cartState.products){
            if(this.props.cartState.products[product].category === '3 Sofa Seat')
                threeSeatsCategory.push(this.props.cartState.products[product])
        }
      

        const fiveSeatsCategory = [];
        for(var product in this.props.cartState.products){
            if(this.props.cartState.products[product].category === '5 Sofa Seat')
                fiveSeatsCategory.push(this.props.cartState.products[product])
        }
        

        const fourSeatsCategory = [];
        for(var product in this.props.cartState.products){
            if(this.props.cartState.products[product].category === '4 Sofa Seat')
                fourSeatsCategory.push(this.props.cartState.products[product])
        }

        const sixSeatsCategory = [];
        for(var product in this.props.cartState.products){
            if(this.props.cartState.products[product].category === '6 Sofa Seat')
                sixSeatsCategory.push(this.props.cartState.products[product])
        }
        

        global.threeList = (threeSeatsCategory.length) ? (
            threeSeatsCategory.map(product => {
                return(
                    <ProductCard product={product}/>
                ) 
            })
        ) : (
            <LoadingCard />
        );

        global.fourList = (fourSeatsCategory.length) ? (
            fourSeatsCategory.map(product => {
                return(
                    <ProductCard product={product}/>
                ) 
            })
        ) : (
            <LoadingCard />
        );

        global.fiveList = (fiveSeatsCategory.length) ? (
            fiveSeatsCategory.map(product => {
                return(
                   <ProductCard product={product}/>
                ) 
            })
        ) : (
            <LoadingCard />
        );

        global.sixList = (sixSeatsCategory.length) ? (
            sixSeatsCategory.map(product => {
                return(
                    <ProductCard product={product}/>
                ) 
            })
        ) : (
            <LoadingCard />
        );


        const sectionList = this.state.services.map(service =>{
            return(
                <section id={service.replace(/\s/g,'')} className="service">
                    <h3 style={{fontWeight:"bold", paddingLeft:"10px"}}>{service}</h3>             
                    {this.getList(service)}                            
                </section>
            );
        });
        
        
        return (
            <>
                <div className="cartAtBottom" style={{textAlign:"right"}}>
                    <Button onClick={this.props.toggleCartModal} style={{height:"50px", width:"400px", margin:"2px", backgroundImage:"linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)"}}>
                    <Row>
                        <Col sm="6">
                            <h5 style={{textAlign:"left", color:"white"}}><Badge className="badge-white">{this.props.cartState.cartNumbers}</Badge>&nbsp;&nbsp;${this.props.cartState.cartCost}</h5> 
                        </Col>
                        <Col sm="6">
                            <h5 style={{textAlign:"right", color:"white"}}><i className="fa fa-chevron-up"></i></h5>                             
                        </Col>
                    </Row>
                    <CartModal/>
                    </Button>
                </div>
                
                <h1 style={{fontWeight:"bold", letterSpacing:"2px", textTransform:"uppercase", textAlign:"center"}}>Professional Sofa Cleaning</h1>
                <br></br><br></br>
                <div className="servicesSection">
                    <div className="servicesNav">
                        <Scrollspy items={ trimmedServices } currentClassName="btn-is-current">
                                {servicesList}
                        </Scrollspy>
                    </div>

                    <div className="servicesDescription" style={{borderLeft:"1px solid gray", paddingLeft:"3%"}}>
                        {sectionList}
                    </div>

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cartState: state.cartState
});

export default connect(mapStateToProps,{ toggleCartModal, addProductFromDB })(SofaCleaning);