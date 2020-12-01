/* import React from "react";
import { View, Image, FlatList ,Text} from "react-native";

export default class App extends React.Component {
constructor(props) {
super(props);

this.state = { movies: [] };
}

UNSAFE_componentWillMount () {
fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
.then(response => response.json())
.then(responseData => {
console.log(responseData);
this.setState({ movies: responseData });
})
.catch((error) => console.log(error));
}


 */

