import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMotorcyclesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/motorcycles.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbMotorcycles = response.data;
      const motorcycles = [];
      if (fbMotorcycles) {
        Object.keys(fbMotorcycles).forEach((fbId) => {
          fbMotorcycles[fbId].id = fbId;
          motorcycles.push(fbMotorcycles[fbId]);
        });
      }
      resolve(motorcycles);
    })
    .catch((err) => reject(err));
});

const getSingleMotorcycle = (motorcycleId) => axios.get(`${baseUrl}/motorcycles/${motorcycleId}.json`);

const postMotorcycle = (newMotorcycle) => axios.post(`${baseUrl}/motorcycles.json`, newMotorcycle);

const deleteMotorcycle = (motorcycleId) => axios.delete(`${baseUrl}/motorcycles/${motorcycleId}.json`);

export default {
  getMotorcyclesByUid,
  getSingleMotorcycle,
  postMotorcycle,
  deleteMotorcycle,
};
