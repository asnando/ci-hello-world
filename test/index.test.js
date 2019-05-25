/* eslint-disable no-undef */
const { expect } = require('chai');
const fetch = require('node-fetch');
const server = require('../src');

const PORT = process.env.PORT || 3000;

describe('test', () => {
  it('should fetch the server status', async () => {
    const res = await fetch(`http://127.0.0.1:${PORT}/status`);
    const payload = await res.json();
    expect(payload.status).to.equal('online');
  });
});

after(() => server.close());
