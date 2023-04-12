import { Component } from "react";



class Aayush extends Component{

constructor(){
    super();
  
    this.changeColor=this.changeColorone.bind(this);
    this.changeColor=this.changeColortwo.bind(this);
    this.changeColor=this.changeColorthree.bind(this);
    this.changeColor=this.changeColorfour.bind(this);
    this.changeColor=this.changeColorfive.bind(this);
}

    changeColorone(){

   
        document.body.style.backgroundColor="green";
    }
    changeColortwo(){

      
        document.body.style.backgroundColor="red";
    }
    changeColorthree(){

        document.body.style.backgroundColor="blue";
    }
    changeColorfour(){

        document.body.style.backgroundColor="brown";
    }
    changeColorfive(){

        document.body.style.backgroundColor="purple";
    }


    render(){
        return(
            <>
         
            <button onClick={this.changeColorone}>Green</button>
            <button onClick={this.changeColortwo}>Red</button>
            <button onClick={this.changeColorthree}>Blue</button>
            <button onClick={this.changeColorfour}>Brown</button>
            <button onClick={this.changeColorfive}>Purple</button>

            </>
        );
    }
}
export default Aayush;