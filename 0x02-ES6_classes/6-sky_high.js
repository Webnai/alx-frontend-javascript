import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Validate input parameters
    if (typeof sqft !== 'number' || typeof floors !== 'number') {
      throw new TypeError('Square footage and floors must be numbers');
    }

    super(sqft);
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Setter for floors
  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = newFloors;
  }

  // Add a comment explaining the purpose of this method
  evacuationWarningMessage() {
    return `In case of emergency, evacuate the ${this._floors} floors gradually.`;
  }
}

