import React from 'react';
class Mycomponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            txtnum : null,
            msg : '',
            rang : 100,
            id : null
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(evt){
        this.setState({txtnum:evt.target.value});

    }

    handleClick(){
        //Generates a random number and updates the state based on the diffrence of numbers.
        let n = Math.floor(Math.random() * this.state.rang) + 1;
        let id  = null;
        console.log(n);
        let res =  n - this.state.txtnum;
        //make's sure that the user enters somenumber in the input field
        if(this.state.txtnum){
            if(res===0){
                this.setState({ msg: 'Correct', id: 1, rang: this.state.rang + 100});
            }
        
            else if(res>=1 && res<=4){
            this.setState({msg: 'Hot',id:2});
            }
            else if(res>=5 && res<=15){
            this.setState({msg: 'Warm',id:3});
            }
            else{
            this.setState({msg:'Cold',id:4});
            
        }
    }


    }


    render(){
        let styles;
        if (this.state.id===1) {
            styles  = {backgroundColor : 'green'};
        }
        else if(this.state.id===2){
             styles = { backgroundColor: 'red' };
        }
        else if(this.state.id ===3){
            styles = { backgroundColor: 'yellow' };
        }
        else{
            styles = { backgroundColor: 'blue'
                    };
        }
        return(
            <div style = {{marginTop : '1px'}}>
                <input className = 'input' type = 'number' placeholder= 'Enter a number' onChange = {this.handleChange} ></input>
                <button className = 'button' onClick = {this.handleClick} >submit</button>
                <h1  style = {styles}>{this.state.msg}</h1>
                {this.state.msg==='Correct'?<Mycomponent  /> :null}
            
            </div>
        )
    }
}


export default Mycomponent;