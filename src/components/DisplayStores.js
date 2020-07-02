import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import Banner from './Banner'
import StoreCard from './StoreCard'
import { Grid } from '@material-ui/core/'

const ListStores = (props) => {
  const { stores } = props;
  if (!stores || stores.length === 0) return <p>No stores, sorry</p>;
  return (
    <ul>
      {stores.map((stores) => {
        return (
          <li key={stores.id} className='list'>
            <h3 className='store-name'>{stores.name} </h3>
            <p className='store-owner'>{stores.owner}</p>
            <Link to={`/${stores.url}`}> <button> Shop {stores.name} </button> </Link>
          </li>
        );
      })}
    </ul>
  );
};

function DisplayStores() {

  const [appState, setAppState] = useState({
    stores: null,
  });

  useState(() => {
    const apiUrl = `/stores`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((stores) => {
        setAppState({ stores: stores });
      });
  }, [setAppState]);


  return (
    <div className='App'>
    <NavBar />
      <div className='stores-container'>
      <Grid container direction="column" justify="center" alignItems="center">
          <Banner />
          <ListStores stores={appState.stores}/>
          <StoreCard /> 
      </Grid>
      </div>
    </div>

  );
}

export default DisplayStores;
