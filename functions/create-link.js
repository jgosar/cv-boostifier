const faunadb = require('faunadb');
const utils = require('./utils');

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET
});

exports.handler = async (event) => {
  try {
    const linkBaseUrl = process.env.URL;
    console.log('linkBaseUrl', linkBaseUrl);
    const {data, theme, name} = JSON.parse(event.body);
    const id = utils.getDbId(name);
    await saveData(id, data, theme);

    const link = `${linkBaseUrl}/?v=${id}`;
    return {
      statusCode: 200,
      body: JSON.stringify({ link })
    }
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: err.toString() }
  }
};

async function saveData(id, data, theme) {
  const encryptedData = utils.encrypt(data);
  await client.query(q.Create(q.Ref('classes/resumes'), {
    data: { id, encryptedData, theme }
  }));
  console.log(`successfully saved id ${id}`);
  return id;
}