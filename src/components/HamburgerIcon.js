import React from 'react';


export default class HamburgerIcon extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        isCardView: false,
        }
    } 
    
    render() {
        return (
            <svg 
            id="burger-icons"
            className="bi bi-chevron-double-down"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
                { this.state.isCardView
                    ? 
                    /* arrows down */
                    <React.Fragment>
                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </React.Fragment>
                    : 
                    /* arrows up */
                    <React.Fragment>
                        <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                        <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                    </React.Fragment>
                }
            </svg>
        );
    }
}