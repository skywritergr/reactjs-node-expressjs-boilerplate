export default class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = { data : [] };
    }
    
    componentDidMount(){
        // Do Ajax requests here or anything you need to instantiate your state.
    }
    
    render(){
        return (
          <h1>{this.props.message}</h1>  
        );
    }
}