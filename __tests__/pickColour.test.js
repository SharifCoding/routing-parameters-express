/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
const httpMocks = require('node-mocks-http');
const pickColour = require('../controller/pickColour');

describe('returns pickColour object', () => {
  it('testing return Your colour is: blue', () => {
    // testing at least one assertion
    expect.assertions(1);
    // mock request object
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/colour/',
      params: { choice: 'blue' },
    });
    // mock response object
    const response = httpMocks.createResponse();
    // call guessNumber controller passing in request and response
    pickColour(request, response);
    // response._getData() will return 'Your colour is: blue'
    expect(response._getData()).toBe('Your colour is: blue');
  });
  it('testing return Your colour is: red', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/colour/',
      params: { choice: 'red' },
    });
    const response = httpMocks.createResponse();
    pickColour(request, response);

    expect(response._getData()).toBe('Your colour is: red');
  });
  it('testing return Your colour is: yellow', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/colour/',
      params: { choice: 'yellow' },
    });
    const response = httpMocks.createResponse();
    pickColour(request, response);

    expect(response._getData()).toBe('Your colour is: yellow');
  });
});
