# Campers Shop Backend

## Live link:

https://campers-shop-server-plum.vercel.app



### Models:

- Product:  name, price, quantity, description, category, image, ratings, isFeatured, isDeleted
- Order: name, email, number, address, products, cashOnDelivery

### Endpoints:


1. Create a Product: (POST) /api/products/create-product 
2. Get All Product: (GET) /api/products
3. Get A Product: (GET) /api/products/:id
4. Get Featured Products : (GET) /api/products/featuredProducts
5. Update A Product: (PUT) /api/products/:id 
6. Delete A Product: (DELETE) /api/products/:id
7. Order a Prouduct: (POST) /api/orders/create-order 


# How to run the application locally

1. Clone the repository

```
https://github.com/shahnewaj12008044/camper-shop-server.git
```

2. Project open

```
cd campers-shop-server
```

3. install the required packages

```
npm i
```

4. Add a .env file

```
PORT= 5000
DATABASE_URL= your db url

```

5. Run the Application locally

```
npm run start:dev
```
