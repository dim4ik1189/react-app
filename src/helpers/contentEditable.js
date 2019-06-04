import React, {Component} from 'react';
import {render} from 'react-dom';

export default function contentEditable(WrappedComponent) {

    return class extends Component {
        state = {
            editing: false
        };

        toggleEdit = (event) => {
            event.stopPropagation();
            if(this.state.editing) {
                this.save();
            } else {
                this.setState({
                    editing: true
                }, () => {
                    this.domElm.focus()
                })
            }
        };

        save = () => {
            this.setState(state => ({
                editing: !state.editing
            }), () => {

            })
        };

        handleKeyDown = event => {
            const {key} = event;
            if(key === 'Enter' || key === 'Escape') {
                this.save();
            }
        };

        render() {
            let editOnClick = true;
            const {editing} = this.state;
            if(this.props.editOnClick !== undefined) {
                editOnClick = this.props.editOnClick;
            }

            return (
                <WrappedComponent
                    className={editing ? 'editing' : ''}
                    onClick={editOnClick ? this.toggleEdit : undefined}
                    contentEditable={editing}
                    ref={(domNode => {
                        this.domElm = domNode
                    })}
                    onBlur={this.save}
                    onKeyDown={this.handleKeyDown}
                    {...this.props}
                >
                    {this.props.value}
                </WrappedComponent>
            )
        }
    }
}