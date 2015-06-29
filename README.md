### Getting started

Setting up the workspace on local:

1. Check out the repository
2. You can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. To allow the localhost to be available over public web
5. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

# tourmap
  Product aimed at identifying Places of Interest in a specified neighbourhood/city,
  and presenting them on the map.

  Further user interactions will display details of a selected PoI including:
  - Title
  - Themes
  - Address
  - Description
  - Images
  - Ratings
  - Tips/Reviews
  - Nearby Services
    - ATMs
    - Gas Stations
    - Medical centers
    - Food centers
    - Hotels
  - Fares

# TODO
- More locations (currently supports only Singapore)
- More themes
- Planning a holiday trip/tour
