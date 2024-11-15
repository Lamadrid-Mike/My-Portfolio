import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { motion } from "framer-motion";

export default function Cards(props) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: props.duration }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            style={{ backgroundColor: "grey" }}
            component="img"
            height="140"
            image={props.src}
            alt={props.info}
          />
          <CardContent style={{ backgroundColor: "#3B3B3B" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "white" }}
            >
              {props.info}
            </Typography>
            <Typography variant="body2" color="white">
              {props.about}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ backgroundColor: "#3B3B3B" }}>
          <Button
            size="small"
            color="primary"
            href={props.link}
            target="_blank"
          >
            Open
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
