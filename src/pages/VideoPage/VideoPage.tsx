import { FC, useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../components/ui/Loader/Loader";
import styles from "./VideoPage.module.scss";
import { InvidiousApi } from "../../services/invidious.service";
import { Chip } from "../../components/ui/Chip/Chip";
import { roundViews } from "../../utils/roundViews";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { VideoCard } from "../../components/business/VideoCard/VideoCard";

export const VideoPage: FC = () => {
  const [descriptionIsOpen, setDescriptionIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("videoId") || "";
  const {
    data: video,
    isLoading,
    error,
  } = useQuery("get video more info", () => InvidiousApi.getVideo(videoId), {
    // enabled: false,
  });

  const onClickDescriptionHandler = () => {
    setDescriptionIsOpen(!descriptionIsOpen);
  };

  const getVideoUrl = () => {
    const videoUrl = video?.formatStreams.filter(
      (vid) => vid.resolution === "720p"
    );
    if (!videoUrl) {
      return "";
    }
    return videoUrl[0]["url"];
  };

  if (isLoading) return <Loader />;
  if (error) return "Error";
  if (!video) return "Data not found";

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <video className={styles.videoplayer} src={getVideoUrl()} controls />
        <span className={styles.videoname}>{video.title}</span>
        <div className={styles.videoinfo}>
          <Chip>
            <AiFillEye />
            {roundViews(video.viewCount)}
          </Chip>
          <Chip>
            <BiLike />
            {video.likeCount}
          </Chip>
          <Chip>
            <BiDislike />
            {video.dislikeCount}
          </Chip>
        </div>
        <div
          onClick={onClickDescriptionHandler}
          className={`${styles.description} ${
            descriptionIsOpen ? styles.active : ""
          } `}
        >
          description description description description description
          description
        </div>
      </div>
      <div className={styles.submain}>
        {video.recommendedVideos.map((recvideo) => {
          return (
            <VideoCard
              videoName={recvideo.title}
              channelAvatar="none"
              channelName={recvideo.author}
              channelUrl={recvideo.authorUrl}
              channelVerified={false}
              dateAgo="0"
              thumbnailUrl={recvideo.videoThumbnails[0]["url"]}
              videoDuration={recvideo.lengthSeconds}
              videoId={recvideo.videoId}
              videoViews={recvideo.viewCount}
              key={recvideo.title}
            />
          );
        })}
      </div>
    </div>
  );
};
