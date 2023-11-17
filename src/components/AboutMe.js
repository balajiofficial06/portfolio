import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Texts } from "../data/Texts";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Urls from "../data/Urls";

const RootContainer = styled("div")(({ theme }) => ({
  padding: "80px 80px",
  display: "flex",
  flexDirection: "row",
  gap: "80px",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));

const CustomButton = styled(Button)({
  width: "150px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "2px solid",
  lineHeight: 1.5,
  backgroundColor: "none",
  borderColor: "#e0a80d",
  borderRadius: "2rem",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#e0a80d",
    borderColor: "#e0a80d",
    boxShadow: "none",
  },
});

const ButtonDiv = styled("div")({
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

const PersonImage = styled("img")(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("lg")]: {
    width: "250px",
  },
}));

function AboutMe() {
  const theme = useTheme();

  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <RootContainer id="aboutme">
      {isMdOrUp && (
        <PersonImage src="https://alamin-portfolio.netlify.app/img/man.png" />
      )}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          style={{
            color: theme.palette.text.heading,
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="p"
          gutterBottom
          style={{
            color: "#bac8d3",
          }}
        >
          {Texts.aboutme}
        </Typography>
        <ButtonDiv>
          <CustomButton href={Urls.link.cv}>
            <Typography variant="p" color="white" fontWeight="100">
              Download CV
            </Typography>
          </CustomButton>
          <CustomButton
            style={{
              gap: "3px",
            }}
            href={Urls.link.linkedIn}
          >
            <Typography variant="p" color="white" fontWeight="100">
              Linked
            </Typography>
            <FontAwesomeIcon
              icon={faLinkedin}
              beat
              size="sm"
              style={{ color: "white" }}
            />
          </CustomButton>
        </ButtonDiv>
      </div>
    </RootContainer>
  );
}

export default AboutMe;
