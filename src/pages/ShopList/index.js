import React, { Component } from 'react';
import {connect} from 'react-redux'
import {initAction,oneAction} from './action'
import {Link} from 'react-router-dom'
import BScroll from 'better-scroll'
class ShopList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         };
         this.page = 1;
    }
    render() {
        let {list}=this.props
        return (
            <div ref={(_box)=>this.box=_box} className="box">
                <div>+
                    {
                        list && list.map((item,index)=>(
                            <dl  onClick={()=>this.handleClick(item)} key={index} >
                                <dt><img src={item.img} alt=""/></dt>
                                <dd>
                                    <b>{item.txt}</b>
                                    <span>{item.pic}</span>
                                </dd>
                            </dl>
                        ))
                    }
                    <Link to="/xiding"><button>点击</button></Link>
                </div>
            </div>
            
        );
    }
    componentDidMount(){
        this.props.init(this.page)
        this.myBScroll=new BScroll(this.box,{
            probeType:2,
        })
        this.scrollEvent(this.page)
    }
    handleClick=(data)=>{
           this.props.jumpDetail(data)
    }
    scrollEvent(page){
        let __this=this
        this.myBScroll.on("scrollEnd",function(){
            if(this.y===this.maxScrollY){
                page++;
                console.log(page)
                __this.props.init(page) 
            } 
        })
    
    }

}
const mapStateToProps=(state)=>{
    return state
}
const mapDispatchToProps=(dispatch)=>{
    return {
        init(page){
            dispatch(initAction(page))
        },
        jumpDetail(val){
            dispatch(oneAction(val))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShopList);