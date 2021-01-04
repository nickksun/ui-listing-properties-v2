import React from 'react';
import PropertyCard from './';
import { shallow } from 'enzyme';
import CARD_STATUS from "../../constants/cardStatusConstants";


describe('<PropertyCard />', () => {
    // On result List
    it('should call save callback once if it is not saved', () => {
        const cb = jest.fn();
        const propertyCard = shallow(
            <PropertyCard
                isSaved={false}
                buttonText={CARD_STATUS.ADD_PROPERTY}
                onChange={cb}
                id={'1'}
            />
        );

        propertyCard.find('[test-attr="button"]').simulate('click');
        expect(cb.mock.calls.length).toEqual(1);
    });
    // On saved List
    it('should call save callback if it removes', () => {
        const cb = jest.fn();
        const propertyCard = shallow(
            <PropertyCard
                onChange={cb}
                buttonText={CARD_STATUS.REMOVE_PROPERTY}
                id={'4'}
            />
        );
        propertyCard.find('[test-attr="button"]').simulate('click')
        expect(cb.mock.calls.length).toEqual(1);
    });
})