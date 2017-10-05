import React,{Component} from 'react';
import CategoriesItem from './CategoriesItem';

export default class CategoriesCard extends Component{
    render(){
        return(
            <div className="col-4">
                <div className="card">
                    <div className="card-header">
                        <h4>Categories</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                
                        <CategoriesItem text="React" to="react"/>
                        <CategoriesItem text="Redux" to="redux"/>
                        <CategoriesItem text="Udacity" to="udacity"/>                        

                      </ul>
                </div>
            </div>
        );
    }
}