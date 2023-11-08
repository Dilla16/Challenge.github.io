class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="col-md-4">
      <div class="card">
      <img src="${this.image}" class="card-img-top" alt="${this.manufacture}">
      <div class="card-body">
      <h5 class="card-text">${this.model}</h5>
      <h5 class="card-title" font-size="20">${this.rentPerDay}/hari</h5>
      <p class="card-text">${this.description}</p>
      <ul>
      <li class="card-text"><i class="bi bi-people"></i>${this.capacity} orang</li>
      <li class="card-text"><i class="bi bi-gear"></i>  ${this.transmission}</li>
      <li class="card-text"><i class="bi bi-calendar"></i>Tahun ${this.year}</li>
      <button class="btn text-center pilih-mobil">Pilih Mobil</button>
      </ul>
      </div>
      </div>
      </div>
    `;
  }
}
