# RNGraphQL
A Pokemon viewer app created with Apollo GraphQL server and React Native.

Full tutorial is available at: [https://pusher.com/tutorials/learning-graphql-react-native](https://pusher.com/tutorials/learning-graphql-react-native)

### Prerequisites

-   React Native development environment
-   [Node.js](https://nodejs.org/en/)
-   [Yarn](https://yarnpkg.com/en/)

The `starter` branch contains the starting point for the tutorial. The `poke-graphql` branch contains the final output for the tutorial.
The `master` branch contains all the post-tutorial updates (if any).

## Getting Started

1.  Clone the repo:

```
git clone https://github.com/anchetaWern/RNGraphQL.git
cd RNGraphQL
```

2. Install the dependencies:

```
yarn
```

3. Re-create the `ios` and `android` folders:

```
react-native eject
```

4. Install the server dependencies:

```
cd server
yarn
```

5. Run the server:

```
yarn start
```

6. Update `App.js` with your machine's internal IP address (or use ngrok):

```
const client = new ApolloClient({ uri: 'http://YOUR_INTERNAL_IP_ADDRESS:4000/graphql' });
```

7. Run the app:

```
react-native run-android
react-native run-ios
```

## Built With

-   [React Native](http://facebook.github.io/react-native/)
-   [GraphQL](https://graphql.org/)
-   [Apollo](https://www.apollographql.com/)
-   [PokéAPI](https://pokeapi.co/)

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/wernancheta" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
