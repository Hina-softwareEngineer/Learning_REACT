
import shopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
// export const updateCollections = (collectionsMap) => ({
//     type : shopActionTypes.UPDATE_COLLECTIONS,
//     payload : collectionsMap
// })


export const fetchCollectionsStart= () = ({
    type : shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsStartAsync = () => {
    return dispatch =>{ 
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        //this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
          collectionRef.get().then(snapshot => {
            const collectionMap= convertCollectionsSnapshotToMap(snapshot);
            //updateCollections(collectionMap);
            this.setState({loading : false});
          });

    }
}
