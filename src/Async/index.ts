import {Component} from 'react';

export interface IAsyncProps {
  iterator;
}

export interface IAsyncState {
  child: React.ReactChild;
}

export class Async extends Component<IAsyncProps, IAsyncState> {
  state = {
    child: null,
  };

  mounted = false;

  componentDidMount () {
    this.mounted = true;
    this.iterate();
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  async iterate () {
    for await (const child of this.props.iterator) {
      if (!this.mounted) {
        break;
      }

      this.setState({child});
    }
  }

  render () {
    return this.state.child;
  }
}
