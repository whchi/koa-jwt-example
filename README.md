# Installation
```sh
# app
npm i
# mongo
docker-compose up -d
```
# Add account
```sh
npm run-script passport
# you will see in console
# ============create success============
# account: local_test
# password: 7b32d144-9579-4562-8666-0893edeab3ac
```
# Get JWT token
```json
// [POST] {host}/account/token
{
	"account":"local_test",
	"password": "7b32d144-9579-4562-8666-0893edeab3ac"
}
// response
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRfYXQiOiIyMDIwLTA2LTA5VDA4OjU5OjM0LjE5OVoiLCJhY2NvdW50IjoibG9jYWxfdGVzdCJ9LCJleHAiOjE1OTE4NjU5OTUsImlhdCI6MTU5MTY5MzE5NX0.hamautEMPLAFw-nHfgE1MzwFxNn0ndcssBUB9QhvbrU",
    "expiredAt": 1591865995
}
```

