# **API Specification**

## **Built With**
- express.js
- mongoose
- mongodb
- jsonwebtoken
- bcrypt
- dotev

## **How To Use**
- Clone repository
 ```
 git clone https://github.com/Tech-4-Impact-BE-21/Project2-BE21
 ```
- Menginstall semua dependencies, seperti express, mongoose, nodemon, jsonwebtoken, bcrypt, dotev dengan cara
 ```
 npm install express
 npm install mongoose
 npm install -D nodemon
 npm install jsonwebtoken
 npm install bcrypt
 npm install dotev
 ```
- Menjalankan project
 ```
 npm run dev
 ```

## **Dari user dokter**
1. **Register Dokter**
    - Methods : post
    - Endpoint : /userDokter/registerDokter
    - Body :
      ```
      {
        "name": "String",
        "email": {
            "type": "String",
        },
        "password": "String"  
      } 
      ```
    - Respons :
      ```
      {
        "massage": "data created succesfull"
      }
      ```

2. **Login Dokter**
    - Methods : post
    - Endpoint : /dokter/login
    - Body :
      ```
      {
        "email":"String",
        "password":"String"
      }
      ```
    - Respons :
      ```
      {
        "message": "Login Succesfull!",
        "token"
      }
      ```

3. **Get All Dokter**
    - Methods : get
    - Endpoint : userDokter/allDokter
    - Respons :
      ```
      {
        "message": "Getting Data",
        "data": [
            {
            "_id": "Object.id",
            "name": "String",
            "email": "String",
            "password": "bcrypt password"
            },
      }
      ```

4. **Get User Dokter ByID**
    - Methods : get
    - Endpoint : userDokter/:id
    - Respons :
      ```
      {
        "message": "You Searched for",
        "data": {
            "_id": "Object.id",
            "name": "String",
            "email": "String",
            "password": "bcrypt password"
            },
      }
      ```

5. **Delete User Dokter ByID**
    - Methods : delete
    - Endpoint : userDokter/:id
    - Respons :
      ```
      {
        "message": "Data Deleted"
      }
      ```

6. **Update User Dokter ByID**
    - Methods : put
    - Endpoint : userDokter/:id
    - Body :
      ```
      {
        "name":"String",
        "email":"String",
        "password":"String"
      }
      ```
    - Respons :
      ```
      {
        "message": "Succes updated user!",
        "data": {
            "_id": "Object.id",
            "name": "String",
            "email": "String",
            "password": "String"
                }
      }
      ```

## **Fitur dokter**

### **Input Data Pasien**
1. **Add Pasien**
    - Methods : post
    - Endpoint : /dokter/addPasien
    - Header :
        - auth-dokter : token
    - Body :
      ```
      {
        "name" : "String",
        "age" : "String",
        "addres" : "String"
        }
      ```
    - Respons :
      ```
      {
        "message": "data has been created!"
      }
      ```

2. **Get All Pasien**
    - Methods : get
    - Endpoint : /dokter/pasien/all
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "Getting Data",
        "data": [
            {
            "_id": "Object.id",
            "name": "String",
            "age": "String",
            "addres": "String"
                },
      }
      ```

3. **Get Pasien ByID**
    - Methods : get
    - Endpoint : /dokter/pasien/:id
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "You Searched for",
        "data": {
            "_id": "Object.id",
            "name": "String",
            "age": "String",
            "addres": "String"
            }
      }
      ```

4. **Delete Pasien ByID**
    - Methods : delete
    - Endpoint : /dokter/pasien/:id
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "Data Deleted"
      }
      ```

5. **Update Pasien ByID**
    - Methods : put
    - Endpoint : /dokter/pasien/:id
    - Header :
        - auth-dokter : token
    - Body :
      ```
      {
        "name" : "String",
        "age" : "String",
        "address" : "String"
       }
       ```
    - Respons :
      ```
      {
        "message": "Succes updated user!",
        "data": {
            "_id": "Object.id",
            "name": "String",
            "age": "String"
        }
      }
      ```

### **Input Data Dokter**
1. **Add Dokter**
    - Methods : post
    - Endpoint : /dokter/addDokter
    - Header :
        - auth-dokter : token
    - Body :
      ```
      {
        "name" : "String",
        "expertise": "String",
        "address": "String",
        "phone_number": "Number"
      }
      ```
    - Respons :
      ```
      {
        "message": "successfully added data"
      }
      ```

2. **Get All Dokter**
    - Methods : get
    - Endpoint : /dokter/allDokter
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "success get data",
        "data": [
            {
            "_id": "Object.id",
            "name": "String",
            "expertise": "String",
            "address": "String",
            "phone_number": "Number",
            "__v": 0
            },
      }
      ```

3. **Get Dokter ByID**
    - Methods : get
    - Endpoint : /dokter/:id
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "managed to get data",
        "data": {
            "_id": "Object.id",
            "name": "String",
            "expertise": "String",
            "address": "String",
            "phone_number": "Number",
            "__v": 0
        }
      }
      ```

4. **Delete Dokter ByID**
    - Methods : delete
    - Endpoint : /dokter/:id
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "successfully deleted data",
        "data": {
            "acknowledged": true,
            "deletedCount": 1
        }
      }
      ```

5. **Update Dokter ByID**
    - Methods : put
    - Endpoint : /dokter/:id
    - Header :
        - auth-dokter : token
    - Body :
      ```
      {
        "name" : "String",
        "expertise" : "String",
        "address" : "String", 
        "phone_number" : "Number"
      }
      ```
    - Respons :
      ```
      {
        "message": "successfully updated data"
      }
      ```

### **Input Data Rekam Medis**
1. **Add Rekam Medis**
    - Methods : post
    - Endpoint : /rekmed/add
    - Header :
        - auth-dokter : token
    - Body :
      ```
      {
        "pasien": "Object.id",
        "dokter": "Object.id",
        "keluhan" : "String",
        "diagnosis" : "String",
        "tanggal_periksa" : "Date"
      }
      ```
    - Respons :
      ```
      {
        "message": "data has been created!"
      }
      ```

2. **Get All Rekam Medis**
    - Methods : get
    - Endpoint : /rekmed
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "Getting Data",
        "data": [
            {
            "_id": "Object.Id",
            "pasien": {
                "_id": "Object.Id",
                "name": "String"
            },
            "dokter": {
                "_id": "Object.Id",
                "name": "String"
            },
            "keluhan": "String",
            "diagnosis": "String",
            "tanggal_periksa": "Date"
            }
        ]
      }
      ```

3. **Get Rekam Medis ByID**
    - Methods : get
    - Endpoint : /rekmed/:id
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "You Searched for",
        "data": {
            "_id": "Object.Id",
            "pasien": "Object.Id",
            "dokter": "Object.Id",
            "keluhan": "String",
            "diagnosis": "String",
            "tanggal_periksa": "Date"
        }
      }
      ```

4. **Delete Rekam Medis ByID**
    - Methods : delete
    - Endpoint : /rekmed/:id
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "Succes deleted data"
      }
      ```

5. **Update Rekam Medis ByID**
    - Methods : put
    - Endpoint : /rekmed/:id
    - Header :
        - auth-dokter : token
    - Body :
      ```
      {
        "pasien": "Object.Id",
        "dokter": "Object.Id",
        "keluhan" : "String",
        "diagnosis" : "String",
        "tanggal_periksa" : "Date"
      }
      ```
    - Respons :
      ```
        {
        "message": "Todo Update",
        "data": {
            "_id": "Object.Id",
            "pasien": "Object.Id",
            "dokter": "Object.Id",
            "keluhan": "String",
            "diagnosis": "String",
            "tanggal_periksa": "Date"
        }
      }
      ```

## **Dari user Pasien**
1. **Register Pasien**
    - Methods : post
    - Endpoint : /userPasien/registerPasien
    - Body :
      ```
      {
        "name": "String",
        "email": {
            "type": "String"
        },
        "password": {
        "type" :"String"
        }
      } 
      ```
    - Respons :
      ```
      {
        "massage": "data created succesfull"
      }
      ```

2. **Login Pasien**
    - Methods : post
    - Endpoint : /pasien/login
    - Body :
      ```
      {
        "email":"String",
        "password":"String"
      }
      ```
    - Respons :
      ```
      {
        "message": "Login Succesfull!",
        "token"
      }
      ```

3. **Get All Pasien**
    - Methods : get
    - Endpoint : /userPasien/allPasien
    - Respons :
      ```
      {
        "message": "Getting Data",
        "data": [
          {
            "_id": "Object.Id",
            "name": "String",
            "email": "String",
            "password": "bcrypt password"
          },
      }
      ```

4. **Get User Pasien ByID**
    - Methods : get
    - Endpoint : userPasien/:id
    - Respons :
      ```
      {
        "message": "You Searched for",
        "data": {
          "_id": "Object.Id",
          "name": "String",
          "email": "String",
          "password": "bcrypt password"
        }
      }
      ```

5. **Delete User Pasien ByID**
    - Methods : delete
    - Endpoint : userPasien/:id
    - Respons :
      ```
      {
        "message": "Data Deleted"
      }
      ```

6. **Update User Pasien ByID**
    - Methods : put
    - Endpoint : userPasien/:id
    - Body :
      ```
      {
        "name":"String",
        "email":"String",
        "password":"String"
      }
      ```
    - Respons :
      ```
      {
        "message": "Succes updated user!",
        "data": {
            "_id": "Object.id",
            "name": "String",
            "email": "String",
            "password": "String"
                }
      }
      ```

## **Fitur pasien**

### **Input Data Pasien**
1. **Get Pasien ByID**
    - Methods : get
    - Endpoint : /pasien/:id
    - Header :
        - auth-pasien : token
    - Respons :
      ```
      {
        "message": "You Searched for",
        "data": {
            "_id": "Object.id",
            "name": "String",
            "age": "String",
            "addres": "String"
            }
      }
      ```
2. **Get Rekam Medis ByID**
    - Methods : get
    - Endpoint : /pasien/rekmed/:id
    - Header :
        - auth-dokter : token
    - Respons :
      ```
      {
        "message": "You Searched for",
        "data": {
            "_id": "Object.Id",
            "pasien": "Object.Id",
            "dokter": "Object.Id",
            "keluhan": "String",
            "diagnosis": "String",
            "tanggal_periksa": "Date"
        }
      }
      ```