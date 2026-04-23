"use client";
import { Notification } from "@/src/components/modal/Notification";
import { useModal } from "@/src/hooks/useModal";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function UnAuthorizedContent() {
  const router = useRouter();
  const searchParam = useSearchParams();

  const callbackUrl = searchParam.get("callbackUrl") || "/";

  const handleConfirm = () => {
    router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="fixed inset-0 z-mask bg-black/40 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <Notification
            message="로그인이 필요한 서비스 입니다"
            onConfirm={handleConfirm}
          />
        </div>
      </div>
    </div>
  );
}

export default function UnAuthorizedPage() {
  return (
    // 쿼리를 읽어오기 전까지 찰나의 순간에 띄워줄 fallback 화면을 지정합니다.
    // 모달창이 뜨기 전이므로 빈 화면이나 로딩 스피너를 넣는 것이 자연스럽습니다.
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <UnAuthorizedContent />
    </Suspense>
  );
}
