interface NotificationProps {
  message: string;
  onConfirm: () => void;
}

export const Notification = ({ message, onConfirm }: NotificationProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/20 flex flex-col select-none">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-90 h-50 bg-white rounded-2xl flex flex-col">
          <div className="px-7 py-5 flex-1">
            <h1 className="text-lg font-medium">알림</h1>
            <div className="mt-5 flex justify-center items-center">
              <span className="font-pretendard font-sm">{message}</span>
            </div>
          </div>
          <button
            className="w-full cursor-pointer border-t py-4 border-gray-200"
            onClick={onConfirm}
          >
            <span className="text-brand-primary font-medium">확인</span>
          </button>
        </div>
      </div>
    </div>
  );
};
