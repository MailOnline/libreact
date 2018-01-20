import {Component} from 'react';
import {on, off, isClient} from '../util';

export interface INetworkSensorProps {
  children?: (INetworkState) => React.ReactElement<any>;
}

export interface INetworkSensorState {
  online: boolean;
  since: Date;
}

export class NetworkSensor extends Component<INetworkSensorProps, INetworkSensorState> {
  state: INetworkSensorState;

  constructor (props, context) {
    super(props, context);

    if (isClient) {
      this.state = {
        online: navigator.onLine,
        since: undefined
      };
    } else {
      this.state = {
        online: true,
        since: undefined
      };
    }
  }

  componentDidMount() {
    on(window, 'online', this.onOnline);
    on(window, 'offline', this.onOffline);
  }

  componentWillUnmount() {
    off(window, 'online', this.onOnline);
    off(window, 'offline', this.onOffline);
  }

  onOnline = () => {
    this.setState({
      online: true,
      since: new Date()
    });
  };

  onOffline = () => {
    this.setState({
      online: false,
      since: new Date()
    });
  };

  render () {
    return this.props.children(this.state);
  }
}