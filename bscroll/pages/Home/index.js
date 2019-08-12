import React, { Component } from "react";
import Axios from "axios";
import "./style.css";
import BScroll from "better-scroll";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      index: 0
    };
  }
  render() {
    return (
      <>
        <div ref={box => (this.box = box)} className="box">
          <ul className="list">
            {this.state.list.map(item => (
              <li key={item.id}>
                <h3 ref={"item_" + item.title} className="title">
                  {item.title}
                </h3>
                <div>
                  {item.children.map(item => (
                    <p className="name" key={item.id}>
                      {item.name}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ol className="right-ol">
          {this.state.list.map((item, index) => (
            <li
              style={{ color: index === this.state.index ? "red" : null }}
              onClick={() => this.handleScrollTo(item.title, index)}
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ol>
      </>
    );
  }
  componentDidMount() {
    Axios.get("/api/list").then(({ data }) => {
      console.log(data.list);
      this.setState({
        list: data.list
      });
    });
    this._scroll = new BScroll(this.box, {
      probeType: 2,
      click: true
    });
    this.Myscroll();
  }
  handleScrollTo(title, index) {
    console.log(this);
    this._scroll.scrollToElement(this.refs["item_" + title], 500);
    this.setState({
      index
    });
  }
  Myscroll() {
    var _this = this;
    this._scroll.on("scroll", function(e) {
      const arr = Object.values(_this.refs);
      let scrollTop = [];
      arr.forEach((item, index) => {
        scrollTop.push(item.offsetTop);
      });
      scrollTop.forEach((item, index) => {
        if (-this.y - item > 0 && -this.y - item < 10) {
          console.log(index);
          _this.setState({
            index
          });
        }
      });
    });
  }
  // !!!!!! ⚠️⚠️⚠️⚠️⚠️   重要 一定要写这个东西
  componentWillUnmount(){
    this._scroll.destroy()
  }
}

export default Home;
