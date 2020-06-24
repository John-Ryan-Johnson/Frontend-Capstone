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
      console.log(repairs);
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

export default { getRepairsByMotorcycleId, getModsByMotorcycleId };
