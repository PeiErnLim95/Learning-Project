import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../action/itemAction';
import PropTypes from 'prop-types';
import Label from "reactstrap/es/Label";

// TODO: Refactor this into Hooks style
//Create Shopping List UI Component
class ShoppingList extends Component {

    componentDidMount() {
      this.props.getItems();
    };

    deleteItemHandler = (id) => {
        this.props.deleteItem(id);
    };

    render(){
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        { items.map(({ _id, name, price }) => (
                            <CSSTransition classNames="fade" timeout={500} key={_id}>
                                <ListGroupItem>
                                    <Button className="remove=btn" color="danger" style={{marginRight: '1rem'}} size="sm"
                                            onClick={ this.deleteItemHandler.bind(this, _id) }>
                                        Remove
                                    </Button>
                                    <Label style={{marginRight: '1rem'}}>Name: { name }</Label>
                                    <Label>Price: { price }</Label>
                                </ListGroupItem>
                            </CSSTransition>
                        )) }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

let mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);