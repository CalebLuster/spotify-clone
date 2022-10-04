import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetials } =
    useGetSongDetailsQuery({ songid });
  const { data, isFetching: isFetchingRelatedDetials, error } = useGetSongRelatedQuery({ songid })

  if(isFetchingSongDetials || isFetchingRelatedDetials) return <Loader title="Searching song details"/>

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Spotify Lite</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((Line, i) => (
              <p className="text-gray-400 text-base my-1">{Line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics found!
            </p>
          )}
        </div>
      </div>
      <RelatedSongs />
    </div>
  );
};

export default SongDetails;
