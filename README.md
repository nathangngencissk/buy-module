# Buy Module
Api for placing buying orders integrated with the Stock API [Stock management](https://github.com/nathangngencissk/stock-management), done in NodeJS + MongoDB.

## How it works
![Class Diagram](https://raw.githubusercontent.com/nathangngencissk/buy-module/master/diagram.png)

![Process Diagram](https://raw.githubusercontent.com/nathangngencissk/buy-module/master/process_buy.png)

There are 2 main features.

[Stock management](https://github.com/nathangngencissk/stock-management)

`/api/shop/:id/buy` -> for placing a buying order. This will receive an id of a product and an id of a warehouse owned by the shop and will do the pricing to find the best offer available for the suppliers that have this product. Then it will create a supply order and referencing document and return this order.

`/api/shop/:id/receivement` -> for stating the receivement of products for which a buying order was placed. This will send a request to `/api/warehouse/create_movement` endpoint of the Stock API with the type `NOTA_FISCAL_ENTRADA` to create a document and order and update the designated product in stock. 

## How to run
install dependencies and run `docker-compose up`.
