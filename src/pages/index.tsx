import { Route, Routes } from "react-router-dom";
import { TrendPage } from "./TrendPage/TrendPage";
import { ChannelPage } from "./ChannelPage/ChannelPage";
import { VideoPage } from "./VideoPage/VideoPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TrendPage />} />
      <Route path="/channel" element={<ChannelPage />} />
      <Route path="/watch" element={<VideoPage />} />
    </Routes>
  );
};
