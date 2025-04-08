import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

function AboutMe() {
  return (
    <React.Fragment>
      <Typography variant="h1" gutterBottom>
        About Me
      </Typography>

      {/* 受注内容 */}
      <Typography variant="h4">受注内容</Typography>
      <Divider />
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          サイト制作
        </Typography>
        <Typography variant="h6">
          ホームページやランディングページ等のWebサイト制作
        </Typography>
        <Typography>
          Reactを中心としたWebサイトの制作運営を受注いたします。
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          動画編集
        </Typography>
        <Typography variant="h6">YouTubeやInstagram等の動画編集</Typography>
        <Typography>
          カットやテロップなどの個別の案件から、動画編集全体など幅広い案件を受注いたします。
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          企画書・資料作成
        </Typography>
        <Typography variant="h6">企画書やプレゼン資料等の作成</Typography>
        <Typography>
          プレゼン用のスライドを中心に、企画書のデザイン、使用するデータの分析などを受注いたします。
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          マーケティング/リサーチ・データ分析
        </Typography>
        <Typography variant="h6">
          企業のプレゼン等に使用するデータの収集・分析
        </Typography>
        <Typography>
          市場規模の算出や競合他社の分析、その他データの収集・分析業務を受注いたします。
        </Typography>
      </Box>

      {/* 経歴 */}
      <Typography variant="h4">経歴</Typography>
      <Divider />

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            2023年-4月
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>工業系高校へ入学</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            5月
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>動画編集学習開始</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            2024年-6月
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>PremierePro学習開始</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            7月
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>ココナラでの案件受注開始</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            12月
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>プログラミング学習開始</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>GameSphere公開</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            2025年-1月
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>React学習開始</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            4月
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>ポートフォリオサイト公開</TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* スキル・資格 */}
      <Typography variant="h4">スキル・資格</Typography>
      <Divider />
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          資格
        </Typography>
        <Typography>計算技術検定3級</Typography>
        <Typography>Google AI Essentials</Typography>
        <Typography>情報技術検定試験2級</Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          スキル
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">プログラミング言語・ツール</Typography>
          <Typography>HTML</Typography>
          <Typography>CSS</Typography>
          <Typography>JavaScript</Typography>
          <Typography>React</Typography>
          <Typography>Python</Typography>
          <Typography>C言語</Typography>
          <Typography>Sass</Typography>
          <Typography>Git・GitHub</Typography>
          <Typography>Firebase</Typography>
          <Typography>Googleサイト</Typography>
          <Typography>Google Analytics</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">動画編集</Typography>
          <Typography>PremierePro</Typography>
          <Typography>AfterEffects</Typography>
          <Typography>Adobe Animate</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">その他</Typography>
          <Typography>Excel</Typography>
          <Typography>PowerPoint</Typography>
          <Typography>Word</Typography>
          <Typography>Googleスプレットシート</Typography>
          <Typography>Googleスライド</Typography>
          <Typography>Keynote</Typography>
          <Typography>Numbers</Typography>
          <Typography>Pages</Typography>
          <Typography>Canva</Typography>
          <Typography>Blender</Typography>
          <Typography>Jw_cad</Typography>
          <Typography>ChatGPT</Typography>
          <Typography>Gemini</Typography>
          <Typography>Notion</Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default AboutMe;
