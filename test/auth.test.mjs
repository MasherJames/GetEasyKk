import chai from "chai";
import chaiHttp from "chai-http";
import app from "../server";

chai.should();
chai.use(chaiHttp);

describe("Auth test", () => {
  it("Should create a new user and return 201 if successfull", done => {
    const user = {
      username: "Masher",
      email: "masher@gmail.com",
      password: "Password123",
      confirmPassword: "Password123"
    };
    chai
      .request(app)
      .post("/api/users/signup")
      .send(user)
      .end((err, res), () => {
        expect(res.status).toBe(201);
      });
  });
});
