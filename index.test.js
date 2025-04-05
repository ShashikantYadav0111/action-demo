const request = require("supertest");
const app = require("./index");

describe('GET /', () => {
    it('responds with Hello GitHub Actions!', async () => {
      const res = await request(app).get('/');
      expect(res.text).toBe('Hello GitHub Actions!');
    });
  });