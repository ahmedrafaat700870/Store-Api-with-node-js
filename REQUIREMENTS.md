# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required]
- Show [token required]
- Create N[token]

#### Orders

- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- \_id
- \_firstName
- \_lastName
- \_name
- \_gmail
- \_password

#### Orders

- id
- User_id REFERANCES \_User(\_id)
- quantity of each product in the order
- status of order (active or complete)

#### Product_Orders

- order REFERANCES order(id)
- Product REFERANCES Product(id)

### Endpoints Strucher ---> User

-index - token required
.HTTP web
.Endpoint:/user/CreateUser
.REQUEST BODY--> Array of User Object
{
"\_id": 1,
"\_name": "ahmed3800",
"\_first_name": "ahmed",
"\_last_name": "rafat",
"\_gmail": "rafatahmed380@gmail.com",
"\_password": "$2b$10$9VhK7djs1VXEoIXv.ob0COmRmq5h8g6mjUZ3aV2Rt9Kd4yzOjwiwe"
}
-index - token not required
.HTTP web post
.Endpoint:/user/authanticated
.REQUEST BODY--> Array of User Object
{
User:  
{
\_id: 1
\_name: 'newahmed'
\_first_name: 'ahmed'
\_last_name: 'rafaat'
\_gmail: 'rafatahmed@gmail.com'
\_password: 'ahmednew'
}
,
token: token
}

-index - token required
.HTTP web get
.Endpoint:/user/GetOne
.REQUEST BODY--> Array of User Object
{
status: 'Success',
data :
'User' :
[
{
_id: 1
_name: 'ahmed30'
_first_name: 'ahmed'
_last_name: 'rafaat'
_gmail: 'rafatahmed@gmail.com'
_password: '1234'
}
],
message: 'Get User',
}

-index - token required
.HTTP web get
.Endpoint:/user/GetAll
.REQUEST BODY--> Array of User Object
{
status: 'Success',
data :
'User' :
[
{
\_id: 1,
\_name: 'ahmed30',
\_first_name: 'ahmed',
\_last_name: 'rafaat',
\_gmail: 'rafatahmed@gmail.com',
\_password: '1234'
},
{
\_id: 2,
\_name: 'ali2',
\_first_name: 'ali',
\_last_name: 'jamal',
\_gmail: 'alijmal@gmail.com',
\_password: 'ali234'
}
],
message: 'Get All Users',
}

-index - token required
.HTTP web patch
.Endpoint:/user/UpdateOne
.REQUEST BODY--> Array of User Object
{
status: 'Success',
data :
'User' :
[
{
\_id: 1
\_name: 'newahmed'
\_first_name: 'ahmed'
\_last_name: 'rafaat'
\_gmail: 'rafatahmed@gmail.com'
\_password: 'ahmednew'
}
],
message: 'Update User',
}

-index - token required
.HTTP web delete
.Endpoint:/user/DeleteOne
.REQUEST BODY--> Array of User Object
{
status: 'Success',
data :
'User' :
[
{
\_id: 1
\_name: 'newahmed'
\_first_name: 'ahmed'
\_last_name: 'rafaat'
\_gmail: 'rafatahmed@gmail.com'
\_password: 'ahmednew'
}
],
message: 'Delete User',
}

### Endpoints Strucher ---> Product

-index - token required
.HTTP web get
.Endpoint:/Product/GetOne
.REQUEST BODY--> Array of Product Object
{
status: 'Success',
data :
'Prodcut' :
[
{ id: 1
_name: 'fool'
descount: null
brand: 'eg'
price: 20
category: 'not'}
],
message: 'Get Product',
}

-index - token required
.HTTP web get
.Endpoint:/Product/GetAll
.REQUEST BODY--> Array of Product Object
{
status: 'Success',
data :
'Prodcut' :
[ {
id: 1
_name: 'fool'
descount: null
brand: 'eg'
price: 20
category: 'not'
},
{
id: 2
_name: 'fool2'
descount: null
brand: 'eg'
price: 202
category: 'not'
},]
message: 'Get All Products',
}

-index - token required
.HTTP web post
.Endpoint:/Product/CreateOne
.REQUEST BODY--> Array of Product Object
{
status: 'Success',
data :
'Prodcut' :

      {  id: 1
        _name: 'fool'
        descount:  null
        brand: 'eg'
        price: 20
        category: 'not'}
    ,

message: 'Create User',
}

-index - token required
.HTTP web patch
.Endpoint:/Product/UpdateOne
.REQUEST BODY--> Array of Product Object
{
status: 'Success',
data :
'Product' :

       {  id: 1
        _name: 'fool'
        descount:  null
        brand: 'eg'
        price: 20
        category: 'not'
        }
    ,

message: 'Update Product',
}

-index - token required
.HTTP web delete
.Endpoint:/Product/DeleteOne
.REQUEST BODY--> Array of Product Object
{
status: 'Success',
data :
'User' :

      {
        \_id: 1
        \_name: 'newahmed'
        \_first_name: 'ahmed'
        \_last_name: 'rafaat'
        \_gmail: 'rafatahmed@gmail.com'
        \_password: 'ahmednew'
      }
    ,

message: 'Delete Product',
}

### Endpoints Strucher ---> Orders

-index - token required
.HTTP web get
.Endpoint:/Order/GetOne
.REQUEST BODY--> Array of Order Object
{
status: 'Success',
data :
'Order' :
{  
 id: 1
user_id: 1
quantity: 2
\_status: 'conblited'
},
message: 'Get Order'
}

-index - token required
.HTTP web get
.Endpoint:/Order/GetAll
.REQUEST BODY--> Array of Order Object
{
status: 'Success',
data :
'Order' :
[ 'Order' :
{
id: 1
user_id: 1
quantity: 2
_status: 'conblited'
},
'Order' :
{
id: 1
user_id: 1
quantity: 2
_status: 'conblited'
}],
message: 'Get All Orders',
}

-index - token required
.HTTP web post
.Endpoint:/Order/CreateOne
.REQUEST BODY--> Array of Order Object
{
status: 'Success',
data :
'Order' :
'Order' :
{  
 id: 1
user_id: 1
quantity: 2
\_status: 'conblited'
},
message: 'Create Order',
}

-index - token required
.HTTP web patch
.Endpoint:/Order/UpdateOne
.REQUEST BODY--> Array of Order Object
{
status: 'Success',
data :
'Order' :
'Order' :
{  
 id: 1
user_id: 1
quantity: 2
\_status: 'conblited'
},
message: 'Update Order',
}

-index - token required
.HTTP web delete
.Endpoint:/Order/DeleteOne
.REQUEST BODY--> Array of Order Object
{
status: 'Success',
data :
'Order' :
{  
 id: 1
user_id: 1
quantity: 2
\_status: 'conblited'
},
message: 'Delete Order',
}

## Data Schema

### User Schema

CREATE TABLE \_User (
\_id SERIAL primary key ,
\_name varchar(50) not null,
\_first_name varchar(50) not null,
\_last_name varchar(50) not null,
\_gmail varchar(50) unique,
\_password varchar(255) not null
);

## Data Schema

### Product Schema

CREATE TABLE Product (
id SERIAL PRIMARY KEY,
\_name varchar(50) NOT NULL UNIQUE,
descount integer,
brand varchar(50)NOT NULL,
price integer NOT NULL,
category varchar(50)
);

## Data Schema

### Order Schema

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
user_id integer not null,
FOREIGN KEY(user_id) REFERENCES \_User(\_id) ON DELETE CASCADE ON UPDATE CASCADE,
\_status varchar(50),
quantity integer not null
);

## Data Schema

### Product_Order Schema

CREATE TABLE Porduct_Order (
Oreder integer not null ,
Product integer not null ,
PRIMARY KEY (Oreder, Product),
CONSTRAINT CON_Oreder FOREIGN KEY (Oreder) REFERENCES orders(id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT CON_Product FOREIGN KEY (Product) REFERENCES Product(id) ON DELETE CASCADE ON UPDATE CASCADE
);

### JWT

you must but Tocken_Secret in env , Token encrypt by Tocken_Secret when the user login the api give hime this token and when user go to any routes he must given this token . we check from this token by Tocken_Secret if it true then the user authenticated else he not .
