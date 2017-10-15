import React,{Component} from 'react';
import { connect } from 'react-redux';

export default class InsertComment extends Component {
    render(){
        return(
            <div className="row row-space" >
            <div className="col">
                <div className="card">

                    <div className="card-header">
                        Comment
                    </div>
                    <div className="card-block">
                        <div className="container" style="margin-top:1em">
                            <form>
                                <textarea className="form-control" cols="30"></textarea>
                                <button type="submit" className="btn btn-primary" style="margin: 1em 0em 1em 1em">Submit</button>
                            </form>
                        </div>
                    </div>



                </div>
            </div>

        </div>
        )
    }
}