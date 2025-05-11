import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import WebFluxIcon from "../Parts/Icon/WebFluxIcon";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="#">
        ゼン
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: 4, sm: 6 },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },

            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,

            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Portfolio
            </Typography>
            <Link color="text.secondary" variant="body2" href="#about">
              About Me
            </Link>
            <Link color="text.secondary" variant="body2" href="#skills">
              Skills
            </Link>
            <Link color="text.secondary" variant="body2" href="#projects">
              Projects
            </Link>
          </Box>

        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            pt: 3,
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Copyright />
          </div>
          
        </Box>
      </Container>
    </React.Fragment>
  );
}
