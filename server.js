const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(express.static('public'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

app.locals.title = 'Mars Packing List';

app.get('/api/v1/items', (request, response) => {
  database('items')
    .select()
    .then(items => {
      if (items.length) {
        response.status(200).json(items);
      } else {
        response.status(404).json({ error: 'no items found' });
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/items', (request, response) => {
  const item = request.body;
  for (let requiredParameter of ['name']) {
    if (!item[requiredParameter]) {
      return response.status(422).send({
        error: `You are missing a ${requiredParameter} property for your item!`
      });
    }
  }

  database('items')
    .insert(item, 'id')
    .then(item => {
      response.status(201).json({ id: item[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch('/api/v1/items/:id', (request, response) => {
  const { name, packed } = request.body;

  database('items')
    .where('id', request.params.id)
    .update({
      name,
      packed
    })
    .then(updatedItem => {
      if (!updatedItem) {
        return response.status(422).json({ error: 'unable to update item' });
      }
      response.status(200).json('Item updated');
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.delete('/api/v1/items/:id', (request, response) => {
  database('items')
    .where('id', request.params.id)
    .select()
    .del()
    .then(deletedItem => {
      if (!deletedItem) {
        return response
          .status(404)
          .json({ error: 'could not find requested item' });
      }
      response.status(202).json(deletedItem);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on port ${app.get('port')}`);
});

module.exports = app;
