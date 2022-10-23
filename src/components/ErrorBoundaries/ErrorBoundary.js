import {Component} from "react";
import Card from "../UI/Card/Card";
export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({error})
    }

    render() {
        const  {error} = this.state;
        console.log({
            error, message: error.message
        })
        if(!error) {
            return this.props.children
        }
        return (
            <Card><p style={{color: "red", fontSize: '2rem'}}>  {error && error.message ? error.message : 'Something went wrong'} </p></Card>
        )
    }
}