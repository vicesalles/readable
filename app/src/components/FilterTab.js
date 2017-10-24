import React, { Component } from 'react';

class FilterTab extends Component {
    state = {
        direction: 'up'
    }

    handleClick = (e) => {

        e.preventDefault();
        const newState = this.state.direction === 'up' ? 'down' : 'up';
        this.setState({ direction: newState });

    }

    render() {
        return (<a onClick={this.handleClick} className="nav-link clicable">{this.props.title}
            <span className="badge badge-secondary">{this.state.direction}</span>
        </a>)
    }
}

export default FilterTab;