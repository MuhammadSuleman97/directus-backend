# directus-backend

## Set up Project
1. Clone this repository.
2. You can install Docker Desktop from https://www.docker.com/products/docker-desktop/ according to your system needs.
3. After Docker Installation, create an `.env` file in root directory and provide the require credientials accordingly.
4. You can run the docker image using command `docker compose up`.
5. On your default browser open `localhost:8055` and sign in with your email and password provided through env file.
6. once signed in, You will be able to create and modify collectiona ccording to your needs and Directus will create end points accordingly.


## My Implementation
* I have created an Investors collection with 4 required fileds wiht following validations:
  * Name: String (Required)
  * Phone Number: String (Required, Unique, Valid for UAE numbers in the format of these examples `0565000000`, `565000000`, `+971560000000` and `00971500000000` )
  * Email: String (Required, Unique, Regex to verify Email Format)
  * Wallet Amount: Number (Default 0, Allow Float Values)
  * Default fields like `status`, `user_created`, `user_updated`, `date_created`, `date_updated`.

#### End points

Api End Point: `http://localhost:8055/items/investors`

Response: ``` {
    "data": [
        {
            "id": 1,
            "status": "published",
            "user_created": "ddc68d7a-6a87-45d7-9e90-9c085f9c7a59",
            "date_created": "2023-10-25T21:21:48.661Z",
            "user_updated": "ddc68d7a-6a87-45d7-9e90-9c085f9c7a59",
            "date_updated": "2023-10-25T21:22:21.970Z",
            "name": "Suleman",
            "phone_number": "0565762497",
            "email": "sulemanmug@gmail.com",
            "wallet_amount": 11
        },
        {
            "id": 2,
            "status": "published",
            "user_created": "ddc68d7a-6a87-45d7-9e90-9c085f9c7a59",
            "date_created": "2023-10-25T21:22:17.136Z",
            "user_updated": "ddc68d7a-6a87-45d7-9e90-9c085f9c7a59",
            "date_updated": "2023-10-25T21:22:25.805Z",
            "name": "Ahmad",
            "phone_number": "0565876467",
            "email": "ahmadmug@gamil.com",
            "wallet_amount": 0
        }
    ]
}```



#### Custom End point implementation
* I created a folder named custom_extensions and cd to that folder
* After that created an endpoint using CLI by running command `npx create-directus-extension@latest` and choosing `endpoint` and then `javascript`.
* End point wallet_balnce is created with api route `localhost:8055/wallet_balance/:id`
* This Endpoint take id as query param and return current balance of taht specific investor

```
{
    "message": "success",
    "data": {
        "id": 2,
        "name": "Ahmad",
        "wallet_balance": 5
    }
}
```


### You can view the working on following link 
https://drive.google.com/file/d/1JhzuEsOtRxeH6t5pr0HMGPsvLDIJVgya/view?usp=sharing



