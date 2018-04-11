/* eslint-env jest */
/* eslint no-underscore-dangle: 0 */
const httpMocks = require('node-mocks-http');
const whichTaco = require('../controller/whichTaco');
const whichBurger = require('../controller/whichBurger');

describe('returns whichTaco object', () => {
  it('testing return Soft Taco', () => {
    // testing at least one assertion
    expect.assertions(1);
    // mock request object
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/taco/',
      params: { index: 0 },
    });
    // mock response object
    const response = httpMocks.createResponse();
    // call whichTaco controller passing in request and response
    whichTaco(request, response);
    // response._getData() will return 'Nailed it!'
    expect(response._getData()).toBe("\"Soft Taco\"");
  });
  it('testing return Crunchy Taco', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/taco/',
      params: { index: 1 },
    });
    const response = httpMocks.createResponse();
    whichTaco(request, response);

    expect(response._getData()).toBe("\"Crunchy Taco\"");
  });
  it('testing return Super Taco', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/taco/',
      params: { index: 2 },
    });
    const response = httpMocks.createResponse();
    whichTaco(request, response);

    expect(response._getData()).toBe("\"Super Taco\"");
  });
  it('testing return not a taco option', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/taco/',
      params: { index: 3 },
    });
    const response = httpMocks.createResponse();
    whichTaco(request, response);

    expect(response._getData()).toBe("\"Sorry, thats not a taco option\"");
  });
});

describe('returns whichBurger object', () => {
  it('testing return Hamburger', () => {
    // testing at least one assertion
    expect.assertions(1);
    // mock request object
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/burger/',
      params: { index: 0 },
    });
    // mock response object
    const response = httpMocks.createResponse();
    // call whichTaco controller passing in request and response
    whichBurger(request, response);
    // response._getData() will return 'Nailed it!'
    expect(response._getData()).toBe("\"Hamburger\"");
  });
  it('testing return Cheese Burger', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/burger/',
      params: { index: 1 },
    });
    const response = httpMocks.createResponse();
    whichBurger(request, response);

    expect(response._getData()).toBe("\"Cheese Burger\"");
  });
  it('testing return Dble Cheese Burger', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/burger/',
      params: { index: 2 },
    });
    const response = httpMocks.createResponse();
    whichBurger(request, response);

    expect(response._getData()).toBe("\"Dble Cheese Burger\"");
  });
  it('testing return not a burger option', () => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/burger/',
      params: { index: 3 },
    });
    const response = httpMocks.createResponse();
    whichBurger(request, response);

    expect(response._getData()).toBe("\"Sorry, thats not a burger option\"");
  });
});
