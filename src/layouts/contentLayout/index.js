import React from 'react';
import Header from '../_components/header';
import Footer from '../_components/footer';

class Content extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
export default Content