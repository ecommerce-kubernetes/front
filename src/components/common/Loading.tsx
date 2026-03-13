import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-1 justify-center items-center gap-5">
      <Loader2 className="animate-spin" size={24} />
      <span>불러오는 중</span>
    </div>
  );
}
