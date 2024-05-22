/* import request from "supertest";
import app from "../app";

describe('testing api routes', () => {

  const email = 'testing@gmail.com';
  const password = 'testing123';

  // login route
  it('should be able to login', (done) => {
    request(app).get('/login').expect(200).then(response => {
      expect(response.body).toBe({ email, password });
      return done();
    })
  })

}) */
