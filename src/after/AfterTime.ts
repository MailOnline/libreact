import {Component} from 'react';
import {render} from 'react-universal-interface';

export interface IAfterTimeProps {
  ms: number;
}

export interface IAfterTimeState {
  ready: boolean;
}

export class AfterTime extends Component<IAfterTimeProps, IAfterTimeState> {
  state: IAfterTimeState = {
    ready: false
  };

  timer;

  componentDidMount () {
    this.timer = setTimeout(() => {
      this.setState({
        ready: true
      });
    }, this.props.ms);
  }

  componentWillUnmount () {
    clearTimeout(this.timer);
  }

  render () {
    if (!this.state.ready) {
      return null;
    }

    return render(this.props, {});
  }
}
