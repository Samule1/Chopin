# Chopin

<p align="center" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Eug%C3%A8ne_Ferdinand_Victor_Delacroix_043.jpg/1200px-Eug%C3%A8ne_Ferdinand_Victor_Delacroix_043.jpg" width="150"></p>



Chopin is a machine learning based, online music profiler service, powered by React + Redux and node.js + Express.

## Functional specification

Our vision is to bring a whole new perspective to music listeners. We want to take a quick glance in peoples subconscious and present our findings to the user in a convenient way.

The idea is to base our application on [Spotify’s Web API](https://developer.spotify.com/web-api/). The API makes it possible to fetch various data from the user who logs in through our service. This data will be fed to different machine learning and/or data mining algorithms, trying to extract previously unknown and potentially useful knowledge. Furthermore, the output could be used for visualization or track suggestions.

Example of a typical scenario in our service

- User logs in through Spotify and want to learn more about his/her top tracks
- Application fetches [top artists and tracks](https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/)
- Application fetches [data](https://developer.spotify.com/web-api/get-audio-features/) about these top tracks
- Tempo and energy creates a 2D space on which we run k-means with some k’s.
- The result is visualized with [D3.js](https://d3js.org/) with the resulting clusters similar to the image below

<img src="https://study.com/cimages/multimages/16/protein-interaction.jpg" width="150">

## Technological specification

The following features are deemed desirable and the choice of framework is something that was done based on adherence to these features of interest:

* In use by the industry, this is important on a personal level as knowledge of relevant platforms is valuable in job application.

* High compatibility with the chosen frontend framework.

* Light weight. There are many solutions out there and they have different strengths. One strength that we are not looking for here is “good enterprise solution”.

* Start up time. Time is short and the project needs to start making real progress early.

#### Chosen frontend framework

This project will use [React](https://reactjs.org/). The main reason being that it has seen its popularity steadily on the rise since its inception a couple of years ago. Our guess is that competence in using this framework may be of value in a job application scenario. Since it being a requirement of [TDDD27](http://www.ida.liu.se/~TDDD27/) this project will also make use of [Redux](https://redux.js.org/).


#### Chosen back end framework

The project will use [Node.js](https://nodejs.org/en/) for the back end. Programming in Node is done in JavaScript, this will make for a homogeneous solution as our front-  and back end will be written in the same language. Node is also popular in industry and is used by companies like Netflix, LinkedIn, Trello and Uber. 

Is node light weight? In the grand scheme of things our estimation is that Nodes resides on the lighter side of the spectrum, especially if one considers giants like .NET.

On top of the Node back end we will run [Express](https://expressjs.com/). This will make life easier and the framework will help in the construction of the API and offer a cleaner solution than pure Node would.

#### Responsibilities of the front end

The front end should have the ability to send requests for data from the back end via the API. Different kinds of data may need to be visualized on the front end and the solution should facilitate the necessary environment for doing so. 

The front end receives login information from a user and sends this to the back end.

#### Responsibilities of the back end

The back end exposes a relevant API. It will receive login information and handle access tokens for getting personal Spotify data of the active user. The back end will perform preprocessing of Spotify data so as the front end need not worry about more than rendering whatever it is sent from the back end server.

#### Work and meta work

The main idea of the application is now outlined. In case of things turning out to be too much work given the time constraint or work progressing faster than expected, the amount of meta work will be either increased or decreased. Meta work is that which aids development but provides no change in experience for end users. An example of meta work is continuous integration. 