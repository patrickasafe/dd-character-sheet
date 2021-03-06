import { Card, Box, CardContent, Typography } from "@mui/material";
import { Counter } from "../Counter";

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
    <Card variant="outlined" >
      <Box sx={{ display: "flex", flex: "column", alignContent: "center" }}>
        <CardContent sx={{ flex: "auto", justifyContent: "center", alignItems: 'center', padding: "16px 8px 24px"}}>
          <Typography component="div" variant="h4" sx={{ textAlign: "center" }}>
            {children}
          </Typography>
          <Typography component="div" variant="h6" sx={{ textAlign: "center" }}>
            {number}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {`mod`}
          </Typography>
          {/* <Counter /> */}
        </CardContent>
        {/* This number below will be replaced */}
      </Box>
    </Card>
  );
};
