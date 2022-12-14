import Card from '../UI/Card/Card';
import { Component } from 'react';
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (!error) {
      return this.props.children;
    }
    return (
      <Card>
        <p style={{ color: 'red', fontSize: '2rem' }}>
          {' '}
          {error && error.message ? error.message : 'Something went wrong'}{' '}
        </p>
      </Card>
    );
  }
}
