import React , {Component} from 'react'
class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            number : 0
         } 
    }

    increment = () => {
        this.setState({number : this.state.number+1})
    }
    
    decrement = () => {
        if(this.state.number > 0){
            this.setState({number : this.state.number-1})
        } else {
            this.setState({number : 0})
        }
        
    }
    neutral = () => {
        this.setState({number : 0})
    }

    render(){
        return (
            
            <div className='row justify-content-center'>
                <div  className='col-md-5' style={{ marginTop: '250px', border: '5px solid black' }}>
                    <h1>Controle de Fluxo</h1>
                    <h2>{this.state.number} Pessoas</h2>
                    <button className='btn btn-success' onClick={this.increment}>Entrando</button>
                    <button className='btn btn-danger' onClick={this.decrement}>Saindo</button>
                    <button className='btn btn-primary' onClick={this.neutral}>Zerar</button>
                </div>
            </div>
            
            
        )
    }
}
export default Main 