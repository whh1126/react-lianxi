import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
@inject('test')
@observer
class Home extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { test } = this.props;
        return ( <
                div >
                <
                p > { test.name } < /p> {
                console.log(this.props)
            } <
            /div>
    )
}
}
export default Home