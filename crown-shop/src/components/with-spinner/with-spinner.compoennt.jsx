import React from 'react';

import { SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const withSpinner= WrappedComponent=> {
const Spinner = ({isLoading, ...otherprops})=> {
   
    return isLoading ? (
        
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    ):
        (
        <WrappedComponent {...otherprops} />
    )
};
    return Spinner;
}

export default withSpinner;