import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

function ContentLayout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default ContentLayout;
