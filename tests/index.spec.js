const request = require('supertest');
const app = require('../src/server.js');

describe('Tests', () => {
  it('Has a working test', () => {
    expect(true).toEqual(true);
  });

  it('Has a working health route', async () => {
    const response = await request(app).get('/health');

    expect(response.text).toEqual('I am healthy.')
  });

  it('Has a working reverse route', async () => {
    const response = await request(app)
      .post('/reverse')
      .send({
        message: 'Dog I am',
      });

    expect(response.body.message).toEqual('ma I goD');
  });
});
