import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import ItemTabMenu from "../../components/item-tab-menu/item-tab-menu.component";
import OptionSelector from "../../components/option-selector/option-selector.component";
import MyGallery from "../../components/gallery/gallery";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import "./collection-item-modal.styles.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CollectionItemModal = ({ item, addItem }) => {
  const { name, price, imageUrl, description, size, options } = item;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="custom-button">
        View
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="item-overview">
              <div className="product-image">
                <MyGallery item={item}/>
              </div>
              <div className="product-information">
                <div className="item-actions">
                  <h2>{name}</h2>
                  <p>
                    Short description (this is static, don't forget to
                    implement)
                  </p>
                  <p>${price}</p>

                  <div className={`${size} size-selector`}>
                    <OptionSelector item={item} />
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
                <div className="tab-menu">
                  <ItemTabMenu description={description} />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItemModal);
