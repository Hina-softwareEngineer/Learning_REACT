import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './card-list.component';


it('expect to render CArd Component', ()=> {
    // expect(shallow(<CardList />).length).toEqual(1);
    expect(shallow(<CardList />)).toMatchSnapshot();
})

