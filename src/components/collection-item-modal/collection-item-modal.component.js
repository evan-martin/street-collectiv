import React from "react";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

import {Image, Modal} from "semantic-ui-react";

import CustomButton from "../custom-button/custom-button.component";
import ItemTabMenu from "../../components/item-tab-menu/item-tab-menu.component";
import SizeSelector from "../../components/size-selector/size-selector.component";

import "./collection-item-modal.styles.scss";

const CollectionItemModal = ({item, addItem}) => {
  const {name, price, imageUrl, description, size} = item;
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      size="large"
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<CustomButton inverted>View </CustomButton>}
    >
      <Modal.Content image>
        <Image size="medium" src={imageUrl} />name
        <Modal.Description>
          <div className="item-overview">
            <div className="item-actions">
              <h2>{name}</h2>
              <p>
                Short description (this is static, don't forget to implement)
              </p>
              <p>${price}</p>

              <div className={`${size} size-selector`}>
                <SizeSelector />
              </div>
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
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItemModal);
