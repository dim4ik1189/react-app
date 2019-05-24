import React, {Component} from 'react';
import {Container, Button, ListGroup, ListGroupItem} from 'reactstrap';
import Back from "./Back";

class HrefList extends Component {
    constructor() {
        super();
        this.state = {
            hrefs: [
                {href: '1.html', text: 'ссылка 1'},
                {href: '2.html', text: 'ссылка 2'},
                {href: '3.html', text: 'ссылка 3'},
            ],
        };
    }

    removeSelfItem = index => {
        this.setState(prevState => ({
            hrefs: prevState.hrefs.filter((_, i) => i !== index)
        }))
    };

    addHrefToList = () => {
        const length = this.state.hrefs.length + (+new Date()).toString().split('').slice(-6, -1).join('');

        const href = {
            href: `${length}.html`,
            text: `ссылка ${length}`,
        };

        this.setState(state => ({
            hrefs: state.hrefs.concat([href])
        }))
    };

    render() {
        const list = this.state.hrefs.map((obj, index) => {
            return <ListGroup>
                <ListGroupItem key={index}>
                    <a href={obj.href}>{obj.text}</a>
                    <Button className="ml-5" color="danger" onClick={() => this.removeSelfItem(index)}>Remove</Button>
                </ListGroupItem>
            </ListGroup>
        });
        return (
            <Container>
                <Back />
                { list }
                <Button onClick={this.addHrefToList} className="mt-3" color="primary">Add href to list</Button>
            </Container>
        )
    }
}

export default HrefList;