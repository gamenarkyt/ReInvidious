import { FC, useLayoutEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
// import styles from "./ChannelPage.module.scss";
// import { Chip } from "../../components/ui/Chip/Chip";
import { Loader } from "../../components/ui/Loader/Loader";
// import { VideoCard } from "../../components/business/VideoCard/VideoCard";
import { InvidiousApi } from "../../services/invidious.service";

export const ChannelPage: FC = () => {
  // const [count, setCount] = useState(0);s
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("channelId") || "";
  const {
    data: channel,
    isLoading,
    error,
    refetch,
  } = useQuery("get channel info", () => InvidiousApi.getTrending(), {
    enabled: false,
    keepPreviousData: false,
  });

  useLayoutEffect(() => {
    refetch();
  }, [channelId, channel, searchParams]);

  if (isLoading) return <Loader />;
  if (error) return `Error: `;
  if (!channel) return "Data not found";

  // return (
  //   <div className={styles.container}>
  //     <img src={channel.bannerUrl} className={styles.banner}></img>
  //     <div className={styles.channelcard}>
  //       <img
  //         className={styles.channelavatar}
  //         src={channel.avatarUrl}
  //         alt="channel avatar"
  //       />
  //       <div className={styles.channelinfo}>
  //         <div className={styles.channelstatistics}>
  //           <Chip fontSize="18px">{channel.name}</Chip>
  //           <Chip>{channel.subscriberCount} subs</Chip>
  //         </div>
  //         <Chip>{channel.description}</Chip>
  //       </div>
  //     </div>
  //     <div className={styles.channelvideos}>
  //       {channel.relatedStreams.map((channelVideo) => {
  //         return (
  //           <VideoCard
  //             key={channelVideo.title}
  //             channelAvatar={channelVideo.uploaderAvatar}
  //             videoUrl={channelVideo.url}
  //             channelName={channelVideo.uploaderName}
  //             channelUrl={channelVideo.uploaderUrl}
  //             channelVerified={channelVideo.uploaderVerified}
  //             dateAgo={channelVideo.uploadedDate}
  //             thumbnailUrl={channelVideo.thumbnail}
  //             videoDuration={channelVideo.duration}
  //             videoName={channelVideo.title}
  //             videoViews={channelVideo.views}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};
