import React, { Suspense } from "react";
// import { list } from "@vercel/blob";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface PromoVideoProps {
  fileName: string;
  className?: string;
}
const PromoVideo = ({ fileName, className }: PromoVideoProps) => {
  return (
    <Suspense fallback={<VideoSkeleton />}>
      <VideoComponent
        /** @TODO 영상 변경시 vercel blob에 업로드 후 여기에 파일 이름 반영  */
        fileName={fileName}
        className={cn("rounded-2xl md:rounded-b-none", className)}
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
  /** vercel blob 사용 중지에 따라 사용하지 않는 코드 */
  // const { blobs } = await list({
  //   prefix: fileName,
  //   limit: 1,
  // });
  // const { url } = blobs[0];

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
      <source src={`/videos/${fileName}`} type="video/mp4" />
      현재 브라우저에서는 비디오를 지원하지 않습니다.
    </video>
  );
};

const VideoSkeleton = () => {
  return <Skeleton className="mx-auto aspect-[872/562] w-full max-w-[872px]" />;
};

export default PromoVideo;
