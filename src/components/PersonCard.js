import React, { Component } from 'react';

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addAge: this.props.age,
        };
    }

    render() {
        const { FirstName, LastName, age, HairColor } = this.props;

        return (
            <>
                <div>
                    <h1>
                        {LastName}, {FirstName}
                    </h1>
                    <p>Age: {this.state.addAge}</p>
                    <p>Hair Color: {HairColor}</p>
                </div>
                <button
                    onClick={() => {
                        this.setState({ addAge: this.state.addAge + 1 });
                    }}
                >
                    Birthday Button for {FirstName} {LastName}
                </button>
            </>
        );
    }
}

export default PersonCard;