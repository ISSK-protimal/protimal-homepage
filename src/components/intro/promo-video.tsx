import React, { Suspense } from "react";
import { list } from "@vercel/blob";
import { Skeleton } from "@/components/ui/skeleton";

const PromoVideo = () => {
  return (
    <Suspense fallback={<VideoSkeleton />}>
      <VideoComponent
        fileName="promo-video.mp4"
        className="rounded-2xl md:rounded-b-none"
      />
    </Suspense>
  );
};

const VideoComponent = async ({
  fileName,
  className,
}: {
  fileName: string;
  className?: string;
}) => {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      // preload="none"
      arai-label="Video Player"
      className={className}
    >
      <source src={url} type="video/mp4" />
      현재 브라우저에서는 비디오를 지원하지 않습니다.
    </video>
  );
};

const VideoSkeleton = () => {
  return <Skeleton className="w-full aspect-[872/562] max-w-[872px] mx-auto" />;
};

export default PromoVideo;
