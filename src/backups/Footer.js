import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
  {/* Main Footer */}
  <footer className="main-footer">
    {/* To the right */}
    <div className="float-right d-none d-sm-inline">
      Anything you want
    </div>
    {/* Default to the left */}
    <strong><a href="#">All right reserved</a></strong>
  </footer>
</div>

        )
    }
}
