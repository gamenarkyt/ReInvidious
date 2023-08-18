import { FC } from "react";
import { VideoCard } from "../../components/business/VideoCard/VideoCard";
import styles from "./TrendPage.module.scss";
import { useQuery } from "react-query";
import { InvidiousApi } from "../../services/invidious.service";
import { Loader } from "../../components/ui/Loader/Loader";

export const TrendPage: FC = ({}) => {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery("get trends", () => InvidiousApi.getTrending()); /////////// edit to piped service
  // const [data, setData] = useState<ITrendingVideo[]>();

  if (isLoading) return <Loader />;
  if (error) return `Error: `;
  if (!videos) return "Data not found";

  return (
    <div className={styles.container}>
      {videos.map((video) => {
        console.log(video);

        return (
          <VideoCard
            key={video.title}
            thumbnailUrl={video.videoThumbnails[0]["url"]} ///////// and this
            videoId={video.videoId}
            videoName={video.title}
            videoDuration={video.lengthSeconds}
            videoViews={video.viewCount}
            dateAgo={video.publishedText}
            channelAvatar="https://i.pinimg.com/564x/c2/23/24/c22324e7088934283545439601b82536.jpg"
            channelName={video.author}
            channelUrl={video.authorUrl}
            channelVerified={video.authorVerified}
          />
        );
      })}
    </div>
  );
};
