<h1 align="center">
<br>
Code Delivery
</h1>

<p align="center">
This is a project that simulates delivery apps, in which you can choose a route and see the movement of the car on that route
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<hr />

## Technologies

- **ReactJs** — Used on the front end to build the interface
- **NestJS** — Used on the backend to get position data on the kafka and send via Websockets to the front end
- **Golang** — Used to simulate a service that sends the current position of the cars on the map to Kafka
- **Apache Kafka** - Used as a messaging service, storing cars positions


## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
