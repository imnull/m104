import React, { Component } from 'react'
import Index from './pages/index/index'
import About from './pages/about/index'

export default class extends Component<{},{},{}> {
    render() {
        return (
            <>
                <About />
                <Index />
            </>
        )
    }
}