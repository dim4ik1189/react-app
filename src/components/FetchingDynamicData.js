import React, { Component, Fragment } from 'react';
import Back from './Back'
import Contacts from './Contacts'

class FetchingDynamicData extends Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    contacts: data
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <Fragment>
                <Back />
                <Contacts contacts={this.state.contacts}/>
            </Fragment>
        )
    }
}

export default FetchingDynamicData;