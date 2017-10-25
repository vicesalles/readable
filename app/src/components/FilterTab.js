import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';


class FilterTab extends Component {
    state = {
        direction: 'up'
    }

    handleClick = (e) => {

        e.preventDefault();
        //Checking filter
        const filter = this.props.title === 'Popular' ? 'voteScore' : 'timestamp';
        //Setting order
        const direction = this.state.direction === 'up' ? 'down' : 'up';

        this.setState({ direction });

        
        this.props.dispatch(setFilter(filter, direction));
    }

    render() {
        return (<a onClick={this.handleClick} className="nav-link clicable">{this.props.title}
            <span className="badge badge-secondary">{this.state.direction}</span>
        </a>)
    }
}

export default connect()(FilterTab);