import React, { Component, Fragment } from 'react';
import Back from './Back'
import Contacts from './Contacts'

class FetchingDynamicData extends Component {
    state = {
        contacts: [],
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

    onDragStart = (event, index) => {
        this.draggedItem = this.state.contacts[index];
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData('text/html', event.target.parentNode);
    };

    onDragOver = index => {
        const draggedOverItem = this.state.contacts[index];
        if(this.draggedItem === draggedOverItem) {
            return;
        }
        let contacts = this.state.contacts.filter(item => item !== this.draggedItem);
        contacts.splice(index, 0, this.draggedItem);

        this.setState({
            contacts
        })
    };

    onDragEnd = () => {
        this.draggedIdx = null;
    };

    render() {
        return (
            <Fragment>
                <Back />
                <Contacts
                    contacts={this.state.contacts}
                    onDragStart={this.onDragStart}
                    onDragOver={this.onDragOver}
                    onDragEnd={this.onDragEnd}
                />
            </Fragment>
        )
    }
}

export default FetchingDynamicData;