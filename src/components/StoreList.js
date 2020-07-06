import React, {Component} from "react";
import axios from "axios";
import StoreCard from "./StoreCard";
import "./styles/cardstyles.css";
import "./styles/avatar.scss";

class StoreList extends Component {
  constructor() {
    super();

    this.state = {
      stores: []
    };
  }

  componentDidMount() {
    axios.get("/stores").then(res => {
      this.setState({
        stores: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <StoreCard>
          {this.state.stores.map(stores => (
            <div>
              <div>
                <img className="avatar" src={stores.img_path} />
              </div>
              <div className="storecard">
                <h1 key={stores.id}> {stores.name} </h1>
                <p> {stores.owner} </p>
              </div>
            </div>
          ))}
        </StoreCard>
      </div>
    );
  }
}

export default StoreList;
