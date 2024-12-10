# Realtime Device Tracker

Realtime Device Tracker is a real-time web application that tracks the location of devices using geolocation. It is built with modern technologies like Express.js, EJS, Nodemon, Socket.io, and Leaflet.css Leaflet.js. The app supports precise tracking, interactive mapping, and dynamic updates using WebSockets and OpenStreetMap.

## Features
- **Real-time Tracking**: Monitor the location of devices in real-time.
- **Interactive Map**: Visualize device locations on an interactive map.
- **Dynamic Updates**: Receive live updates using WebSockets.
- **User-Friendly Interface**: Simple and intuitive user interface.

## Technologies Used
- **Express.js**: A minimal and flexible Node.js web application framework.
- **EJS**: Embedded JavaScript templates for generating HTML markup with plain JavaScript.
- **Nodemon**: A tool that helps develop node.js based applications by automatically restarting the node application when file changes are detected.
- **Socket.io**: Enables real-time, bidirectional and event-based communication.
- **Leaflet.js**: An open-source JavaScript library for mobile-friendly interactive maps.
- **Leaflet.css**: Stylesheet for Leaflet.js.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Deeppatel-4032/realTime_Treck_project.git
    cd realtime-device-tracker
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Application**:
    ```bash
    npm start
    ```


## Usage
1. Open your browser and navigate to `http://localhost:PORT`. or 5030
2. The application will display an interactive map with device locations.
3. Devices can be tracked in real-time as they move.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
##  Project Structure
   ```bash
    realtime-device-tracker/
    ├── public/
    │   ├── css/
    │   │   └── style.css       # Styling for the application
    │   └── js/
    │       └── app.js          # Frontend logic for geolocation and WebSocket updates
    ├── views/
    │   └── index.ejs           # HTML template rendered using EJS
    ├── index.js               # Backend server logic with Express and Socket.io
    ├── package.json            # Dependencies and scripts
    └── README.md               # Documentation

```
## Acknowledgements
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Nodemon](https://nodemon.io/)
- [Socket.io](https://socket.io/)
- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)

