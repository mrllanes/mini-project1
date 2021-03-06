const Traveller = require('./Traveller');
const Trips = require('./Trips');
const Location = require('./Location');

Location.belongsToMany(Traveller, {
  through: {
    model: Trips,
    unique: false,
  },
  as: 'Travellers',
});

Traveller.belongsToMany(Location, {
  through: {
    model: Trips,
    unique: false,
  },
  as: 'Planned_Trips',
});

// Traveller.hasMany(Location);
// Location.hasMany(Traveller);

module.exports = { Traveller, Trips, Location };
