import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";
import User from "../models/User";
import { app, server } from "../server";

chai.use(chaiHttp);

describe("Auth test", () => {
  beforeEach(done => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });
  afterEach(done => {
    server.close();
    done();
  });

  describe("Post User", () => {
    it("Should not create a new user if username is invalid", done => {
      const user = {
        username: "",
        email: "masher@gmail.com",
        password: "Password123",
        confirmPassword: "Password123"
      };
      chai
        .request(app)
        .post("/api/users/signup")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.username).to.equal(
            "Username must be between 2 and 30 characters"
          );
          done();
        });
    });

    it("Should not create a new user if email is invalid", done => {
      const user = {
        username: "Masher",
        email: ".com",
        password: "Password123",
        confirmPassword: "Password123"
      };
      chai
        .request(app)
        .post("/api/users/signup")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.email).to.equal("Email is invalid");
          done();
        });
    });

    it("Should not create a new user if password is invalid", done => {
      const user = {
        username: "Masher",
        email: "masher@gmail.com",
        password: "*******",
        confirmPassword: "Password123"
      };
      chai
        .request(app)
        .post("/api/users/signup")
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.password).to.equal(
            "Password must be atleast 6 characters"
          );
          expect(res.body.confirmPassword).to.equal("Password must match");
          done();
        });
    });
  });
});
