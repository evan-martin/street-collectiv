import React from "react";
import {connect} from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import {addItem} from "../../redux/cart/cart.actions";
import {Button, Header, Image, Modal} from "semantic-ui-react";


import "./collection-item.styles.scss";

import ItemTabMenu from '../../components/item-tab-menu/item-tab-menu.component'

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl, description} = item;
  const [open, setOpen] = React.useState(false);




  return (
    <div>
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<CustomButton inverted>View </CustomButton>}
        >
        <Modal.Content image>
                  <Image size="medium" src={imageUrl} />
                  <Modal.Description>
                    <div className="item-overview">
                      <div className="item-actions">
                        <h2>{name}</h2>
                        <p>
                          Short description (this is static, don't forget to
                          implement)
                        </p>
                        <p>${price}</p>
                        <button
                          className="add-to-cart-button"
                          onClick={() => {
                            setOpen(false);
                            addItem(item);
                          }}
                          inverted
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>

                    <ItemTabMenu description={description} />

                  </Modal.Description>
                </Modal.Content>
        </Modal>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
