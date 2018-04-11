/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
const httpMocks = require('node-mocks-http');
const guessNumber = require('../controller/guessNumber');

describe('returns guessNumber object', () => {
  it('testing return Nailed it!', () => {
    // testing at least one assertion
    expect.assertions(1);
    // mock request object
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/pickanumber/',
      params: { num: 7 },
    });
    // mock response object
    const response = httpMocks.createResponse();
    // call guessNumber controller passing in request and response
    guessNumber(request, response);
    // response._getData() will return 'Nailed it!'
    expect(response._getData()).toBe('Nailed it!');
  });
  it('testing return Too High!', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/pickanumber/',
      params: { num: 8 },
    });
    const response = httpMocks.createResponse();
    guessNumber(request, response);

    expect(response._getData()).toBe('Too High!');
  });
  it('testing return Too Low', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/pickanumber/',
      params: { num: 6 },
    });
    const response = httpMocks.createResponse();
    guessNumber(request, response);

    expect(response._getData()).toBe('Too Low');
  });
});
