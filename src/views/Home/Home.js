import React, { Component} from 'react';
//import Card from '../../components/Card/Card';
//import Input from '././components/Input/Input';
export default class Home extends React.Component{
// latihan 5.3 , t.5
constructor(props){
    super(props);
    this.state ={
        // your_name :'',
        // status :'',
        name : this.props.name}
}
// fungsi render menampilkan kode JSX ke browser
// fungsi return untuk mengembalikan nilai 
render(){
    return(
        // <React.Fragment>
        //     <h2 style={{width: '550px', margin : 'auto', textAlign : 'center', color: '#4d90fe'}}>Sistem Informasi E-biz-B</h2>
        //     <Input getValues={(name, value)=> this.setState({[name] : value})}/>
        //     <Card.Container>
        //         <Card.Body>
        //             <p>{this.state.status}</p>
        //         </Card.Body>
        //     </Card.Container>
        // </React.Fragment>
        <div>
            <h2>Title Home Component ini Judul Home</h2>
            <p>Hello my name is {this.state.name}</p>
            <button onClick={()=>this.setState({name :'Tyrion Lannister'})}> Change my Name </button>
        </div>
           
    )
}

} //render
export default App;