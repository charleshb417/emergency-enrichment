# EmergencyEnrichment

## How to Install

Prerequisites:
1) Be sure to instal [NodeJS](https://nodejs.org/en/) and [Angular 8.0](https://angular.io/).
2) You will need a [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) as well as a [Dark Skys API key](https://darksky.net/dev). Make sure that the Google Maps key has access to the Javascript API.

From the root directory:
1) Clone the repository and install the client
```
git clone https://github.com/charleshb417/emergency-enrichment.git
cd emergency-enrichment
npm install
```

2) Build the rest service
```
cd api
npm install
```

3) Go back back to the root directory. Put your Dark Skys API key in run.sh on the line that says "export DARK_SKY_KEY="

4) Place your Google API key in src/environments/environment.ts. The file should look like the following
```
export const environment = {
  production: false,
  google_maps_key: "IAMANAPIKEY!!!!"
};
```

5) From the root directory, create a folder called ssl and generate TLS certificates.
```
mkdir ssl
cd ssl
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem
```
6) Add your data files
```
cd api
mkdir assets
mkdir assets/data
# Put your JSON files in this folder
```

7) Run the startup script
```
sh run.sh
```

8) You should be able to see view the project at https://localhost:4200.


## Improvements I Would Make
1) Add some more defenses to the code. I did not have time to map the schema to TypeScript interfaces, however, I would do that given more time. Also, the API would have some sort of middleware for authentication assuming that this was an actual product.

2) Ideally the data would be stored in some sort of database. There would be some method for the user to upload additional incident reports.

3) I would make the interface look more slick. I would also have it so that the user could define which data points appear on the dashboard.

## How long did this take
About six hours, with a few short breaks in-between.
