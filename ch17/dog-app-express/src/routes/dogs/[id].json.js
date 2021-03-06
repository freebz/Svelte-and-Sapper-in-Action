// Listing 17.4 DELETE and PUT server routes in src/routes/dogs/[id].json.js

const {ObjectId} = require('mongodb');
import {getCollection} from './_helpers';

export async function del(req, res) {
  const {id} = req.params;
  try {
    const collection = await getCollection();
    const result = await collection.deleteOne({_id: ObjectId(id)});
    if (result.deletedCount === 0) {
      res.status(404).send(`no dog with id ${id} found`);
    } else {
      res.end();
    }
  } catch (e) {
    console.log('[id].json.js del:', e);
    res.status(500).json({error: e.message});
  }
}

export async function put(req, res) {
  const {id} = req.params;
  const replacement = req.body;

  delete replacement._id;

  try {
    const collection = await getCollection();
    const result = await collection.replaceOne(
      {_id: ObjectId(id)},
      replacement
    );
    const [obj] = result.ops;
    obj._id = id;
    res.end(JSON.stringify(obj));
  } catch (e) {
    console.error('[id].json.js put:', e);
    res.status(500).json({error: e.message});
  }
}
