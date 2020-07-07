import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getRepairsByMotorcycleId = (motorcycleId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/repairs.json?orderBy="motorcycleId"&equalTo="${motorcycleId}"`)
    .then((response) => {
      const allRepairsObject = response.data;
      const repairs = [];
      if (allRepairsObject) {
        Object.keys(allRepairsObject).forEach((repairId) => {
          const newRepair = allRepairsObject[repairId];
          newRepair.id = repairId;
          if (newRepair.isMod === false) {
            repairs.push(newRepair);
          }
        });
      }
      resolve(repairs);
    })
    .catch((err) => reject(err));
});

const getModsByMotorcycleId = (motorcycleId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/repairs.json?orderBy="motorcycleId"&equalTo="${motorcycleId}"`)
    .then((result) => {
      const allRepairsObject = result.data;
      const repairs = [];
      if (allRepairsObject !== null) {
        Object.keys(allRepairsObject).forEach((repairId) => {
          const newRepair = allRepairsObject[repairId];
          newRepair.id = repairId;
          if (newRepair.isMod === true) {
            repairs.push(newRepair);
          }
        });
      }

      resolve(repairs);
    })
    .catch((err) => reject(err));
});

const getAllRepairsByMotorcycleId = (motorcycleId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/repairs.json?orderBy="motorcycleId"&equalTo="${motorcycleId}"`)
    .then((response) => {
      const allRepairsObject = response.data;
      const repairs = [];
      if (allRepairsObject) {
        Object.keys(allRepairsObject).forEach((repairId) => {
          const newRepair = allRepairsObject[repairId];
          newRepair.id = repairId;
          repairs.push(newRepair);
        });
      }
      resolve(repairs);
    })
    .catch((err) => reject(err));
});

const getSingleRepair = (repairId) => axios.get(`${baseUrl}/repairs/${repairId}.json`);

const postRepair = (newRepair) => axios.post(`${baseUrl}/repairs.json`, newRepair);

const deleteRepair = (repairId) => axios.delete(`${baseUrl}/repairs/${repairId}.json`);

const putRepair = (repairId, updatedRepair) => axios.put(`${baseUrl}/repairs/${repairId}.json`, updatedRepair);

export default {
  getRepairsByMotorcycleId,
  getModsByMotorcycleId,
  getAllRepairsByMotorcycleId,
  getSingleRepair,
  postRepair,
  deleteRepair,
  putRepair,
};
