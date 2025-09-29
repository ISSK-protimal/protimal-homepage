import React, { Suspense } from "react";
import { list } from "@vercel/blob";
import { Skeleton } from "@/components/ui/skeleton";

const PromoVideo = () => {
  return (
    <Suspense fallback={<VideoSkeleton />}>
      <VideoComponent
        /** @TODO 영상 변경시 vercel blob에 업로드 후 여기에 파일 이름 반영  */
        fileName="Protimal_Vid"
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
  return <Skeleton className="mx-auto aspect-[872/562] w-full max-w-[872px]" />;
};

export default PromoVideo;
