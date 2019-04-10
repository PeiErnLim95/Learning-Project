import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../action/itemAction';

// TODO: Refactor this to hooks
class ItemModal extends Component{
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
      this.setState({
          modal: !this.state.modal
      })
    };

    changeHandler = (event) => {
      this.setState( { [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
      event.preventDefault();
      let newItem = {
          name: this.state.name,
          price: this.state.price
      };
      this.props.addItem(newItem);
      this.toggle();
    };

    render(){
        return(
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom:'2rem' }}
                    onClick={ this.toggle }
                >Add Item</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add Item Into Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit = { this.submitHandler }>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Add Shopping Item" onChange={this.changeHandler}/>
                                <Label for="item">Price</Label>
                                <Input type="text" name="price" id="item" placeholder="Item Price" onChange={this.changeHandler}/>
                                <Button
                                    color="dark"
                                    style={{ marginTop:'2rem' }}
                                    block
                                    type="submit"
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
   items: state.items
});

export default connect(mapStateToProps, { addItem })(ItemModal);