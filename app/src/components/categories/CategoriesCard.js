import React,{Component} from 'react';
import CategoriesItem from './CategoriesItem';
import {connect} from 'react-redux';
import {getCategories} from '../../actions';
import { withRouter } from 'react-router-dom';

class CategoriesCard extends Component{

    componentDidMount(){
        this.props.dispatch(getCategories());        
    }

    /**
     * @description It turns Categories props into React component CategoriesItem
     * @param Array cats 
     * @return react component
     */
    categories = (cats) =>{
    
        if(cats===undefined){
            return (<p>Loading...</p>);
        }else{

      return cats.map((cat,i)=>{
            return(<CategoriesItem key={cat+i} text={cat.name} to={cat.path}/>);
        })
    }
    }
 
    render(){
        return(
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                        <h4>Categories</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                
                        {this.categories(this.props.categories)}             

                      </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({post}){
    
    const categories = post.categories;
    return{categories}

}

export default withRouter(connect(mapStateToProps)(CategoriesCard));