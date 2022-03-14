import React, { Component } from 'react';

class PersonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            AddAge: this.props.Age,
        };
    }

    render() {
        const { FirstName, LastName, Age, HairColor } = this.props;

        return (
            <>
                <div>
                    <h1>
                        {LastName}, {FirstName}
                    </h1>
                    <p>Age: {this.state.AddAge}</p>
                    <p>Hair Color: {HairColor}</p>
                </div>
                <button
                    onClick={() => {
                        this.setState({ AddAge: this.state.AddAge + 1 });
                    }}
                >
                    Birthday Button for {FirstName} {LastName}
                </button>
            </>
        );
    }
}

export default PersonCard;