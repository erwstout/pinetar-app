import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

interface Props {
  game: any;
}

const Game: React.FC<Props> = ({ game }: Props) => {
  const awayTeam: string = game.teams.away.team.name;
  const homeTeam: string = game.teams.home.team.name;
  return <Card title={`${awayTeam} @ ${homeTeam}`} />;
};

export default Game;
