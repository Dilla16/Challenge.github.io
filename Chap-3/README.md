# Challenge-Chapter-3: HTTP Server dengan menggunakan HTTP Server dan Express.js serta kaidah RESTful API

Chapter ketiga merupakan proyek pembuatan sebuah HTTP Server dengan menggunakan **HTTP Server** dan **Express.js** serta kaidah **RESTful API**.

# Chapter ini terdiri dari beberapa folder sebagai berikut :

1. **folder Data** : folder ini berisi sebuah file bernama cars.json. file tersebut berisi data-data mobil
2. **folder Handler** : folder ini berisi sebuh file bernama carHandler.js. file tersebut berisi fungsi-fungsi yang akan dijalankan
3. **file index.js** : merupakan file utama yang dijalankan file ini berisi http server dan keseluruhan end point.

# Berikut beberapa end point yang dapat dijalankan pada **POSTMAN**:

1. **GET /** akan membuka root endpoint dengan response {message: “ping successfully”}
2. **GET /cars** akan membuka list cars dalam bentuk json
3. **GET /cars/:id** akan membuka satu data cars berdasarkan parameter id.
4. **POST /cars** akan mengembalikan response data cars yang sudah di buat.
5. **PUT /cars/:id** akan mengembalikan response data cars yang sudah terupdate.
6. **DELETE /cars/:id** akan mengembalikan response data cars yang sudah dihapus.

# **Cars.json** terdiri dari beberapa object seperti berikut :

[{ "id": "**string** value id auto menggunakan v4: uuidv4",
"image": "**string** lokasi image",
"rentPerDay": **number**,
"capacity": **number**,
"description": "**string** deskripsi",
"availableAt": "sebuah **timestamp** dalam **format ISO 8601**"}]

# Berikut **sample data** untuk dijalankan pada body :

{  
"image": "./images/car30.min.jpg",
"rentPerDay": 750000,
"capacity": 5,
"description": "Leather seats. Sunroof. Navigation system. Advanced safety features. Spacious trunk.",
"availableAt": "2022-03-24T09:15:30.123Z"
}
