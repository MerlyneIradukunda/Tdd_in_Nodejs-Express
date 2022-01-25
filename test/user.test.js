const { User } = require("../src/models/user.model");
const request = require("supertest");
const expect = require("chai").expect;
const app = require("../app");


describe("/api/users", () => {
  
  beforeEach(async () => {
    await User.deleteMany({});
  });
 
  describe("GET /", () => {
    it("should return all users", async () => {
      const users = [
        { name: "test", email: "test@gmail.com", gender: "male" },
        { name: "test1", email: "test1@gmail.com", gender: "female" }
      ];
      await User.insertMany(users);
      // console.log(users);
      const res = await request(app).get("/api/users");
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(2);
     
    });
  });
});