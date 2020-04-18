import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {connect} from 'react-redux';
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';


class ShopPage extends React.Component{

  unsubscribeFromSnapShot= null;

  componentDidMount(){
    const collectionRef= firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const {updateCollections}=this.props;
      const collectionRef = firestore.collection('collections');

      //this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot);

     const collectionMap= convertCollectionsSnapshotToMap(snapshot);
     updateCollections(collectionMap);
     
    });
  }
  render(){
    const {match}=this.props;
    
    return (
      <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
    );
  }
}


const mapDispatchToProps =  dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect (null, mapDispatchToProps )(ShopPage);