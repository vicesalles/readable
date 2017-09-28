import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class CategoriesItem extends Component {
    render(){
        return(
            <Link to={'/category/'+this.props.to}><a href="#" className="list-group-item list-group-item-action">{this.props.text}</a></Link>
            
        )
    }
}