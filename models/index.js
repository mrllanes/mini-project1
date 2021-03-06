const Traveler = require('./Traveler');

const Traveler = require('./Traveler');
const Trips = require('./Trips');
const Location = require('./Trips');

Location.belongsToMany(Traveler, {
  through: Trips,
  foreignKey: 'traveler_id',
  unique: false,
});
Traveler.belongsToMany(Location, {
  through: Trips,
  foreignKey: 'location_id',
  unique: false,
});
Traveler.hasMany(Location);
Location.hasMany(Traveler);
