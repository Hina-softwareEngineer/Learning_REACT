import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {connect} from 'react-redux';
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.compoennt';



const CollectionsOverviewwithSpinner = withSpinner(CollectionsOverview);
const CollectionsPagewithSpinner=withSpinner(CollectionPage);


class ShopPage extends React.Component{

  constructor(){
    super();
  

  this.state=
  {
    loading:true
  }
}

  unsubscribeFromSnapShot= null;

  componentDidMount(){
    //const collectionRef= firestore.collection('collections');

    //collectionRef.onSnapshot(async snapshot => {
      const {updateCollections}=this.props;
      const collectionRef = firestore.collection('collections');
   
    //this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
      collectionRef.get().then(snapshot => {
        const collectionMap= convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({loading : false});
      });
  }
  render(){
    const {match}=this.props;
    const {loading} = this.state;
    
    return (
      <div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewwithSpinner isLoading={loading} {...props} />} />
    <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionsPagewithSpinner isLoading={loading} {...props} /> } />
  </div>
    );
  }
}


const mapDispatchToProps =  dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect (null, mapDispatchToProps )(ShopPage);