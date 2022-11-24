const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
require("dotenv").config();


/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("GET /api/potions", () => {
    it("should return all potions", async () => {
        const res = await request(app).get("/api/potions");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe("GET /api/potions/:id", () => {
    it("should return a potion by id", async () => {
    const res = await request(app).get("/api/potions/6377d3c1640633eeff22c24e");
        expect(res.statusCode).toBe(200);
        expect.objectContaining({
            name: expect.any(String),
            alias: expect.any(String),
            power: expect.any(Number),
            curative: expect.toBeBoolean,
            mana: expect.any(Number)
          })
        expect(res.body.name).toBe("Acetaminophen, diphenhydramine HCl, phenylephrine HCl");
    });
});

describe("POST /api/potions", () => {
    it("should create a new potion", async () => {
        const res = await request(app).post("/api/potions").send({
            _id: "637dd20a4b5cbb0e2ffb03fc",
            name: "Joshua etodolac",
            alias: "Etodolac",
            curative: true,
            power: 82,
            mana: 17
        });
        expect(res.statusCode).toBe(201);
        expect.objectContaining({
            name: expect.any(String),
            alias: expect.any(String),
            power: expect.any(Number),
            curative: expect.toBeBoolean,
            mana: expect.any(Number)
          })
        expect(res.body.name).toBe("Joshua etodolac");
        expect(res.body.alias).toBe("Etodolac");
        expect(res.body.curative).toBeTruthy();
        expect(res.body.power).toBe(82);
        expect(res.body.mana).toBe(17);
    });
});

describe("PATCH /api/potions/:id", () => {
    it("should update a potion", async () => {
        const res = await request(app)
            .patch("/api/potions/637dd20a4b5cbb0e2ffb03fc")
            .send({              
                mana: 99,
                power: 10
            });
        expect(res.statusCode).toBe(200);
        expect(res.body.mana).toBe(99);
        expect(res.body.power).toBe(10);
    });
});

describe("DELETE /api/potions/:id", () => {
    it("should delete a potion", async () => {
        const res = await request(app).delete("/api/potions/637dd20a4b5cbb0e2ffb03fc");
        expect(res.statusCode).toBe(200);
        expect(res.body.msg).toBe("Potion Joshua etodolac deleted")
    });
});
    
    
    
    
    