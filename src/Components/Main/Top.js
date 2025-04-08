import React, { useRef } from "react";
import "../../Sass/Main/Top.scss";

// マテリアルUI
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

function Top() {
  return (
    <React.Fragment>
      <Typography variant="h1" gutterBottom>
        Top Page
      </Typography>

      {/* このサイトの趣旨 */}
      <Typography variant="h4">このサイトの趣旨</Typography>
      <Divider />
      <Typography>text</Typography>

      {/* やっていること */}
      <Typography variant="h4">私がやっていること</Typography>
      <Divider />
      <Typography>text</Typography>
    </React.Fragment>
  );
}

export default Top;
