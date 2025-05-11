import React from "react";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";

import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Plans() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Typography variant="h2" gutterBottom>
        ＊現在作成中です。
      </Typography>
      <Divider />
      <Typography variant="h1" gutterBottom>
        Plans
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Web制作" {...a11yProps(0)} />
            <Tab label="動画編集" {...a11yProps(1)} />
            <Tab label="企画書・資料作成" {...a11yProps(2)} />
            <Tab
              label="マーケティング/リサーチ・データ分析"
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography variant="h3">Web制作</Typography>
          <Divider />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography variant="h3">動画編集</Typography>
          <Divider />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography variant="h3">企画書・資料作成</Typography>
          <Divider />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Typography variant="h3">
            マーケティング/リサーチ・データ分析
          </Typography>
          <Divider />
        </CustomTabPanel>
      </Box>
    </React.Fragment>
  );
}

export default Plans;
