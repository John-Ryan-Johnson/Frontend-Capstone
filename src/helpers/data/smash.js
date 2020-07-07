import motorcyclesData from './motorcyclesData';
import repairsData from './repairsData';

const completelyRemoveMotorcycle = (motorcycleId) => new Promise((resolve, reject) => {
  motorcyclesData.deleteMotorcycle(motorcycleId)
    .then(() => {
      repairsData.getAllRepairsByMotorcycleId(motorcycleId)
        .then((repairs) => {
          repairs.forEach((repair) => repairsData.deleteRepair(repair.id));
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { completelyRemoveMotorcycle };
