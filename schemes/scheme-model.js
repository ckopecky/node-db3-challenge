const db = require('../data/dbConfig');

const find = () => {
    return db('schemes');
}

const findById = id => {
    return db('schemes').where({id}).first()
}

const findSteps = id => {
    
    // SELECT steps.step_number FROM Schemes
    // JOIN Steps
    // ON schemes.id = steps.schemes_id
    // WHERE schemes.id

    return db('schemes')
    .join('steps', 'steps.scheme_id', 'schemes.id')
    .select(
      'steps.id',
      'steps.step_number',
      'schemes.id as schemes',
      'schemes.scheme_name as scheme',
      'steps.instructions'
    )
    .where({ schemes: id });
}

const add = async body =>{
    return db('schemes').insert(body);
}

const addStep = async (instructions, step_number) => {
    const [id] = await db('steps').where({step_number}).first();
    return await db(steps).insert(instructions, id);
}

const update =  (changes, id) => {
    return db('schemes').update(changes, id, `updated ${id}`);
}

const remove = (id) => {
    return db('schemes').where({id}).del();
}


module.exports = {
    find, 
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}