import React from 'react';

class Nav extends React.Component{
    render(){
        return (
            <nav>
                <ul>
                    <li><a href="/quotes">Random Quotes</a></li>
                    <li><a href="/markdown">Markdown</a></li>
                    <li><a href="/drum">Drum</a></li>
                    <li><a href="/calculator">Calculator</a></li>
                    <li><a href="/clock">Clock</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
