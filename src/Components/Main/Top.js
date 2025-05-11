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
      <Typography>自身のサイト作成のポートフォリオとして、このサイトを作成いたしました。</Typography>
      <Typography>このサイトを通じて、私のスキルや経験を紹介し、ポートフォリオとして活用することを目的としています。</Typography>
      <Typography>こちらのサイトは、Reactで作成しておりますが、実業務ではNext.jsというものでの作成をメインとさせていただきます。</Typography>

      {/* やっていること */}
      <Typography variant="h4">私がやっていること</Typography>
      <Divider />
      <Typography>主にWeb開発の業務を受注していますが、資料作成、データの収集・分析、動画編集などの案件も受注いたします。</Typography>
      
    </React.Fragment>
  );
}

export default Top;
