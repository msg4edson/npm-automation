const chai = require("chai");
const chaiHttp = require("chai-http");
const { json } = require("express");
const expect = chai.expect;
chai.use(chaiHttp);

const app = require("../index");

describe("GET /", function () {
  it("Server is running on port 4005", function (done) {
    chai.request(app).get("/").expect("Server is running on port 4005");
    done();
  });
});
