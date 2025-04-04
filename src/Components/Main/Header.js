import * as React from "react";
import { Link } from "react-router-dom";
// マテリアルUI
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// コンポーネント
import WebFluxIcon from "../Parts/Icon/WebFluxIcon";
// スタイルシート
import "../../Sass/Main/Header.scss";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 28px)",
      }}
      className="header"
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
          >
            {/* <WebFluxIcon /> */}
            <h2 className="logo">WebFlux</h2>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
              className="header"
            >
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ textTransform: "none" }}
              >
                <Link to="/" className="link-darkGray">
                  Top
                </Link>
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ textTransform: "none" }}
              >
                <Link to="/aboutMe" className="link-darkGray">
                  About Me
                </Link>
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ textTransform: "none" }}
              >
                <Link to="/portfolio" className="link-darkGray">
                  Portfolio
                </Link>
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={{ textTransform: "none" }}
              >
                <Link to="/plans" className="link-darkGray">
                  Plans
                </Link>
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Link to="/" className="link">
                  <MenuItem onClick={handleClose}>Top</MenuItem>
                </Link>
                <Link to="/aboutMe" className="link">
                  <MenuItem onClick={handleClose}>About Me</MenuItem>
                </Link>
                <Link to="/portfolio" className="link">
                  <MenuItem onClick={handleClose}>Portfolio</MenuItem>
                </Link>
                <Link to="/plans" className="link">
                  <MenuItem onClick={handleClose}>Plans</MenuItem>
                </Link>

                <Divider sx={{ my: 3 }} />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
