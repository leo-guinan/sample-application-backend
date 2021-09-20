# This is the backend for the cat adoption project.

To run, `DEBUG=sample-application-backend:* npm start`

The application is setup to run on localhost port 3001.

## Supported Endpoints

### GET /
* A simple "hello world" endpoint to ensure that the app is running

### GET /cats/
* Retrieve all cats from datasource

### GET /cats/filter/
* Supported Query Parameters
    * gte - get all cats with price greater than or equal to the value of the parameter
    * lte - get all cats with price less than or equal to the value of the parameter
    * if both gte and lte are supplied, all cats with prices between the two values will be returned

### Potential future filters
Possible future enhancements could allow searching for cats by name. And since the images come from a number of different base urls, it would be possible to search for cats whose image is hosted by specific sites. Since some of the image links are broken, another potential filter would be to only return cats with working links.

## Testing
For the testing of the backend, I would write a test suite that would encompass all end points, ensuring that the data returned was correct and in the correct format. For the first endpoint, it would likely focus on the size and shape of the returned data. There isn't any branching logic and no parameters are used, so the tests would be very simple.

For the filter endpoint, I would ensure that passing no parameters would yield an empty list, using the lte and gte parameters separately would yield the expected result, and using both together would only yield those cats that matched both criteria.

Finally, I would also test different type of data being passed in as filter values, making sure that unexpected data wouldn't yield unpredictable results.