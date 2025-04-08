import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Paper,
  Popover,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";

import PropTypes from "prop-types";

// タブ表示
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

// カード表示
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Portfolio() {
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popoverContent, setPopoverContent] = React.useState("");

  const handlePopoverOpen = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Typography variant="h1" gutterBottom>
        Portfolio
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
        {/* タブの中身 */}
        {/* Web制作 */}
        <CustomTabPanel value={value} index={0}>
          <Typography variant="h3">Web制作</Typography>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="flex-start"
            >
              {/* ポートフォリオサイト */}
              <Item sx={{ width: { xs: "100%", sm: "45%" } }}>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="portfolio website"
                    height="140"
                    image="/Portfolio-web-portfolio.png" // パスを修正
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      ポートフォリオサイト
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      こちらのポートフォリオサイトです。
                      ReactとMaterial-UIを使用して作成しました。
                      レスポンシブ対応しています。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(e) =>
                        handlePopoverOpen(
                          e,
                          `
                        【プロジェクトの詳細】
                        - 使用技術: React, Material-UI
                        - 開発期間: 4日間
                        - 開発環境: VSCode, GitHub
                        - デプロイ: Firebase Hosting
                        - 主な機能:
                          ・レスポンシブデザイン
                          ・タブ切り替え
                          ・ポートフォリオ表示
                      `
                        )
                      }
                    >
                      詳細
                    </Button>
                  </CardActions>
                </Card>
              </Item>
              {/* GameSphere */}
              <Item sx={{ width: { xs: "100%", sm: "45%" } }}>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="portfolio website"
                    height="140"
                    image="/Portfolio-web-gameSphere.png" // パスを修正
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      GameSphere
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      GameSphereは、サイト内のゲーム、画像、文章のすべてをAIが自動生成し、
                      完全無料で楽しめる未来型のゲームプラットフォームです。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(e) =>
                        handlePopoverOpen(
                          e,
                          `
                        【プロジェクトの詳細】
                        - 使用技術: Googleサイト、HTML、CSS
                        - 開発期間: 2日間
                        - 開発環境: VSCode
                        - デプロイ: Googleサイト
                        - 主な機能:
                          ・レスポンシブデザイン
                          ・タブ切り替え
                          ・ゲームプレイ
                          ・AIによる自動生成

                      `
                        )
                      }
                    >
                      詳細
                    </Button>
                    <Button
                      size="small"
                      href="https://sites.google.com/view/game-schoollll/%E3%83%9B%E3%83%BC%E3%83%A0" // URLを追加
                      target="_blank" // 新しいタブで開く
                      rel="noopener noreferrer" // セキュリティ対策
                    >
                      サイトへ
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Stack>
          </Box>
        </CustomTabPanel>

        {/* 動画編集 */}
        <CustomTabPanel value={value} index={1}>
          <Typography variant="h3">動画編集</Typography>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="flex-start"
            >
              {/* RoomTour */}
              <Item sx={{ width: { xs: "100%", sm: "45%" } }}>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="portfolio website"
                    height="140"
                    image="/Portfolio-YouTube-RoomTour.png" // パスを修正
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Room Tour
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      ルームツアー動画です。
                      Adobe公式YouTubeのレッスン動画で制作したポートフォリオです。
                      編集全般を担当しました。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(e) =>
                        handlePopoverOpen(
                          e,
                          `
                        【プロジェクトの詳細】
                        - 使用技術: Adobe Premiere Pro
                        - 開発期間: 1日間
                        - 開発環境: Adobe Premiere Pro
                        - 主な編集内容:
                          ・カット編集
                          ・テロップ挿入
                          ・BGM挿入
                          ・エフェクト追加
                      `
                        )
                      }
                    >
                      詳細
                    </Button>
                    <Button
                      size="small"
                      href="https://youtu.be/yCHnKAsudF8" // URLを追加
                      target="_blank" // 新しいタブで開く
                      rel="noopener noreferrer" // セキュリティ対策
                    >
                      動画へ
                    </Button>
                  </CardActions>
                </Card>
              </Item>
              {/* GameSphere */}
              <Item sx={{ width: { xs: "100%", sm: "45%" } }}>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="portfolio website"
                    height="140"
                    image="/Portfolio-YouTube-カウェコ.png" // パスを修正
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      カウェコスペシャル
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      私のYouTubeチャンネルの動画です。
                      自分自身で、構成、資料の作成、動画編集までを行いました。
                      編集全般を担当しました。
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={(e) =>
                        handlePopoverOpen(
                          e,
                          `
                        【プロジェクトの詳細】
                        - 使用技術: Adobe Premiere Pro
                        - 開発期間: 1日間
                        - 開発環境: Adobe Premiere Pro
                        - 主な編集内容:
                          ・カット編集
                          ・テロップ挿入
                          ・BGM挿入
                          ・エフェクト追加

                      `
                        )
                      }
                    >
                      詳細
                    </Button>
                    <Button
                      size="small"
                      href="https://youtu.be/16_cKrYOXX8" // URLを追加
                      target="_blank" // 新しいタブで開く
                      rel="noopener noreferrer" // セキュリティ対策
                    >
                      動画へ
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Stack>
          </Box>
        </CustomTabPanel>

        {/* 企画書・資料作成 */}
        <CustomTabPanel value={value} index={2}>
          <Typography variant="h3">企画書・資料作成</Typography>
          <Divider />
        </CustomTabPanel>

        {/* マーケティング/リサーチ・データ分析 */}
        <CustomTabPanel value={value} index={3}>
          <Typography variant="h3">
            マーケティング/リサーチ・データ分析
          </Typography>
          <Divider />
        </CustomTabPanel>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "center", // 'bottom'から'center'に変更
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center", // 'top'から'center'に変更
          horizontal: "center",
        }}
        sx={{
          ".MuiPopover-paper": {
            maxWidth: "80%", // ポップアップの最大幅を設定
            margin: "auto", // 中央寄せ
          },
        }}
      >
        <Typography
          sx={{
            p: 3, // パディングを増やして余白を広げる
            maxWidth: 400, // コンテンツの最大幅を設定
            whiteSpace: "pre-line",
            textAlign: "left", // テキストの左寄せ
          }}
        >
          {popoverContent}
        </Typography>
      </Popover>
    </React.Fragment>
  );
}

export default Portfolio;
