import React, { Component } from 'react';
import './style.css'
class Xiding extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="boxdd">
                <h3 className="head">我是头部</h3>
                <div className="top" ref={(_top)=>this.top=_top} style={{background:"pink"}}>吸顶吸顶卡卡</div>
                <div>
                    <ul>
                        <li>小卖铺</li>
                        <li>小卖铺</li> 
                        <li>小卖铺</li>
                        <li>小卖铺</li>
                        <li>小卖铺</li>
                   <li>小卖铺</li>
                    </ul>
                </div>
                
            </div>
        );
        
    }
    componentDidMount(){
        this.scrollEn()
    }
    scrollEn(){
        let that=this;
        let tops=this.top.offsetTop
        console.log(tops)
        window.onscroll=function(){
            // console.log(this.scrollY)
            // console.log(that.top)
            if(this.scrollY>tops){
                that.top.classList.add('fixed')
            }else{
                that.top.classList.remove('fixed')

            }
        }
    }
}

export default Xiding;