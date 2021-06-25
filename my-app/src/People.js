import React from 'react';
import ReactJson from 'react-json-view'
class People extends React.Component {

    render() {
        console.log("child:", this.props.results)

        return (
            <>
                <div >
                <ReactJson src={ this.props.results} />
             
                </div>

            </>
        )

    }
}


export default People;