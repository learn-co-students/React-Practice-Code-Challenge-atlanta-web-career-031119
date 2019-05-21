import React, { Component } from 'react'

export default class Search extends React.Component {

    render () {
        return (
            <div align="center">
                <input type="text" placeholder="Search..." onChange={this.props.sushiFilter} />
            </div>
            // <i className="search icon"></i>
        )
    }
}