class Spice {
  constructor(id, name, description, amount = 0, unitOfMeasure = "jar") {
    this.id = id;
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.unitOfMeasure = unitOfMeasure;
  }
}

export default Spice;
