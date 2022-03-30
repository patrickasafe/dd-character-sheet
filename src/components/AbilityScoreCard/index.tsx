import { Card, CardHeader } from "@mui/material";

interface AbilityScoreCardProps {
  children: string;
  number: number;
}

export const AbilityScoreCard = ({
  children,
  number,
}: AbilityScoreCardProps) => {
  return (
    //This component will use map calling the instance of player context Ability Scores.
    //Ex.: {} = usecontext
    //  player.character.abilitiesScores.map()
    <Card sx={{ textAlign: "center" }}>
      <CardHeader
        titleTypographyProps={{ fontSize: "12px", textAlign: "center" }}
        title={children}
      ></CardHeader>
      {/* This number below will be replaced */}
      {number}
    </Card>
  );
};
