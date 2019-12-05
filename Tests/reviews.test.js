import React from 'react';
import App from '../client/app.jsx';
import Reviews from '../client/components/Reviews.jsx';
import { shallow, mount } from 'enzyme';

describe('it App component using shallow', () => {
  let shallowWrapper;
  beforeAll(() => {
    shallowWrapper = shallow(<App />);
    console.log(shallowWrapper.debug());
  });

  it('should not return an error', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});

describe('it App component using mount', () => {
  let mountWrapper;
  beforeAll(() => {
    mountWrapper = mount(<App />);
    console.log(mountWrapper.debug());
  });
  it('should not return an error', () => {
    expect(mountWrapper).toMatchSnapshot();
  });
  it('should have an "APP" component "at" index of 0', () => {
    expect(mountWrapper.at(0).type()).toBe(App);
  });
});

let state = {
  data: [{
    accuracy: 4,
    amaAme: 1,
    body: 'Doloribus in illum eos consectetur et. Possimus ut cumque est quae sit. Error dolorem laboriosam beatae. Vel et sequi vel sint rerum commodi omnis optio sit. Ut eius molestias quibusdam temporibus sit rem qui. Omnis dolorem enim.',
    checkin: 5,
    cleanliness: 3,
    communication: 4,
    date: '2019-11-30T11:29:24.000Z',
    hostId: 1,
    hostImage: 'https://s3.amazonaws.com/uifaces/faces/twitter/kylefrost/128.jpg',
    hostName: 'Walton',
    hostRes: 'Ipsa rem eius. Eum sed cupiditate earum consequatur sunt non delectus. Voluptas molestias ratione eveniet repudiandae quos eos. Architecto recusandae magnam explicabo aperiam dolores. Et eos et debitis magnam.',
    hostResDate: '2019-12-01T10:45:29.000Z',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/artvavs/128.jpg',
    location: 4,
    name: 'Dallas',
    outHos: 1,
    quiRes: 1,
    rating: 5,
    spaCle: 1,
    stySpa: 1,
    userId: 6,
    value: 3,
    _id: 6,
  }],
  staticData: {
    hearts: [38, 39, 33, 38, 37],
    ratingd: ['4.1', '4.2', '4.1', '4.0', '3.9', '4.0'],
  },
};

describe('<Reviews />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Reviews allState={state}/>);
    console.log(wrapper.debug());
  });
  it('should not return an error', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a row of days depicting the day of the week', () => {
    expect(wrapper.text()).toContain('Reviews');
  });
  it('should have a row of days depicting the day of the week', () => {
    expect(wrapper.text()).toContain('read more');
  });
});
