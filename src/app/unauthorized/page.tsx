"use client";
import { Notification } from "@/src/components/modal/Notification";
import { useModal } from "@/src/hooks/useModal";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function UnAuthorizedPage() {
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

  useModal();
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
