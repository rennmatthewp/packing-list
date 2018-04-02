const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');
const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('client routes', () => {});

describe('api routes', () => {
  beforeEach(done => {
    database.migrate.rollback().then(() => {
      database.migrate.latest().then(() => {
        return database.seed.run().then(() => {
          done();
        });
      });
    });
  });

  describe('GET /api/v1/items', () => {
    it('should return all items', () => {
      return chai
        .request(server)
        .get('/api/v1/items')
        .then(response => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.equal(3);
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('skateboard');
          response.body.length.should.equal(3);
          response.body[0].should.have.property('packed');
          response.body[0].packed.should.equal(false);
        })
        .catch(error => {
          throw error;
        });
    });
  });

  describe('POST /api/v1/items/', () => {
    it('should add an item to the database', () => {
      return chai
        .request(server)
        .post('/api/v1/items')
        .send({
          name: 'underpants',
          packed: false
        })
        .then(response => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.id.should.equal(4);
        })
        .catch(error => {
          throw error;
        });
    });

    it('should not add an item if the post request is missing a name', () => {
      return chai
        .request(server)
        .post('/api/v1/items')
        .send({
          packed: false
        })
        .then(response => {
          response.should.have.status(422);
          response.body.should.include({
            error: 'You are missing a name property for your item!'
          });
        })
        .catch(error => {
          throw error;
        });
    });
  });

  describe('PATCH /api/v1/items/:id', () => {
    it('should update the requested item', () => {
      return chai
        .request(server)
        .patch('/api/v1/items/1')
        .send({ name: 'skateboard', packed: true })
        .then(response => {
          response.should.have.status(200);
          response.body.should.equal('Item updated');
        })
        .catch(error => {
          throw error;
        });
    });

    it('should return 422 if unable to update item', () => {
      return chai
        .request(server)
        .patch('/api/v1/items/10')
        .send({ packed: true })
        .then(response => {
          response.should.have.status(422);
          response.body.should.include({ error: 'unable to update item' });
        });
    });
  });

  describe('DELETE /api/v1/items/:id', () => {
    it('should delete an item', () => {
      return chai
        .request(server)
        .delete('/api/v1/items/1')
        .then(response => {
          response.should.have.status(202);
          response.body.should.equal(1);
        });
    });

    it('should return 404 if requested item not found', () => {
      return chai
        .request(server)
        .delete('/api/v1/items/10')
        .then(response => {
          response.should.have.status(404);
        });
    });
  });
});
