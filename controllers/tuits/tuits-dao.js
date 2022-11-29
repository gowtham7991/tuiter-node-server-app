import tuitsModel from './tuits-model.js';

export const findTuits = async () => {
    const tuits = await tuitsModel.find();
    return tuits;
}
export const createTuit = async (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

