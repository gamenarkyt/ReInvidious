// import axios from "axios";
// import { IChannel } from "../types/channel.interface";
// import { IMiniVideo, IVideo } from "../types/video.interface";

// // const BASE_URL: string = "pipedapi.kavin.rocks";
// const BASE_URL: string = "piped-api.garudalinux.org";
// // const BASE_URL: string = "ytapi.dc09.ru";

// export const ApiP = {
//   async getTrending(): Promise<IMiniVideo[]> {
//     const response = await axios.get<IMiniVideo[]>(
//       `https://${BASE_URL}/trending?region=US`
//     );
//     return response.data;
//   },
//   async getChannel(channelId: string | undefined): Promise<IChannel> {
//     if (typeof channelId == undefined) {
//       channelId = "UCNPUUqi4kqjeaScWtsvfyvw";
//     }
//     const response = await axios.get<IChannel>(
//       `https://${BASE_URL}/channel/${channelId}`
//     );
//     return response.data;
//   },
//   async getVideo(videoId: string | undefined): Promise<IVideo> {
//     if (typeof videoId == undefined) {
//       videoId = "flSHNGJK8UE";
//     }
//     const response = await axios.get<IVideo>(
//       `https://${BASE_URL}/streams/${videoId}`
//     );
//     return response.data;
//   },
// };
