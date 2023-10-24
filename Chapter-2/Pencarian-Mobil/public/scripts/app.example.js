class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.tanggal = document.getElementById("tanggal");
    this.waktuJemput = document.getElementById("waktuJemput");
    this.jumlahPenumpang = document.getElementById("jumlahPenumpang");
    let x = document.getElementById("hero-heading");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = async () => {
    this.clear();
    const date = this.tanggal.value;
    const time = this.waktuJemput.value;
    const passenger = this.jumlahPenumpang.value;

    const fullDateTime = new Date(`${date} ${time}`);

    const condition = (i) => i.capacity >= passenger && new Date(i.availableAt).getTime() >= fullDateTime && i.available;
    const cars = await Binar.listCars(condition);
    Car.init(cars);

    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col-md-4");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
    // this.x.remove();

    // let x = document.getElementById('hero-heading');
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
// class App {
//   constructor() {
//     this.clearButton = document.getElementById("clear-btn");
//     this.loadButton = document.getElementById("load-btn");
//     this.carContainerElement = document.getElementById("cars-container");

//     this.tanggal = document.getElementById("tanggal");
//     this.waktuJemput = document.getElementById("waktuJemput");
//     this.jumlahPenumpang = document.getElementById("jumlahPenumpang");
//     this.heroHeading = document.getElementById("hero-heading");
//   }

//   async init() {
//     await this.load();

//     this.loadButton.onclick = this.run;
//   }

//   run = async () => {
//     this.clear();
//     const date = this.tanggal.value;
//     const time = this.waktuJemput.value;
//     const passenger = this.jumlahPenumpang.value;

//     const fullDateTime = new Date(`${date} ${time}`);

//     const condition = (i) => i.capacity >= passenger && new Date(i.availableAt).getTime() >= fullDateTime && i.available;
//     const cars = await Binar.listCars(condition);
//     Car.init(cars);

//     // Tambahkan container kosong baru jika belum ada
//     if (!document.getElementById("empty-container")) {
//       const emptyContainer = document.createElement("div");
//       emptyContainer.id = "empty-container";
//       emptyContainer.classList.add("container");
//       this.carContainerElement.appendChild(emptyContainer);
//     }

//     Car.list.forEach((car) => {
//       const node = document.createElement("div");
//       node.classList.add("col-md-4");
//       node.innerHTML = car.render();
//       document.getElementById("empty-container").appendChild(node);
//     });

//     // Menghilangkan elemen hero-heading
//     this.heroHeading.style.display = "none";
//   };

//   async load() {
//     const cars = await Binar.listCars();
//     Car.init(cars);
//   }

//   clear = () => {
//     let child = this.carContainerElement.firstElementChild;

//     while (child) {
//       child.remove();
//       child = this.carContainerElement.firstElementChild;
//     }
//   };
// }
