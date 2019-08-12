import React, { Component } from 'react';
import {connect} from 'react-redux'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {oneList}=this.props
        return (
            <div>
                <dl>
                    <dt><img src={oneList.img} alt=""/></dt>
                    <dd>
                        <b>{oneList.txt}</b>
                        <span>{oneList.pic}</span>
                    </dd>
                </dl>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return state
}
const mapDispatchToProps=(dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail);