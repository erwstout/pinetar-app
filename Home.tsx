import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

import Loading from "./Loading";
import Game from "./Game";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(
          "http://statsapi.mlb.com/api/v1/schedule?sportId=1"
        );
        if (response && response.data) {
          setGames(response.data.dates[0].games);
          return setLoading(false);
        } else {
          throw new Error("Could not get games");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getGames();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.root}>
      {games.map(game => (
        <Game key={game.gamePk} game={game} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  }
});

export default Home;
