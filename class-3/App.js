
import React from 'react';

import Header from './Header';
import Footer from './Footer';

function App () {
    return (
        <div> 
        <Header />
        <main style={{ padding: '20px'}}>
            <h2>Welcome to my React App</h2>
            <p>This is the main content of the page.</p>
        </main>
        <Footer />
        </div>
    );
}
export default App;