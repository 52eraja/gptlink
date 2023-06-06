import classNames from 'classnames';

const Footer = () => {
  return (
    <footer className="p-4 flex gap-4 items-center">
      <div>删除</div>
      <input
        className="flex-1 h-10 p-4 leading-8 border rounded"
        type="text"
        placeholder="来说点什么...（Shift + Enter = 换行）"
      />
      <div>发送</div>
    </footer>
  );
};

const ChatItem = ({ role }: { role: string }) => {
  return (
    <div
      className={classNames('p-3 rounded h-fit flex gap-4 items-start w-full flex-1 mb-6', {
        'flex-row-reverse': role === 'user',
      })}
    >
      <img
        className="w-10 rounded-full"
        src={
          role === 'user'
            ? 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKE7KHyLv1ZiaocNz6x1PWaMeOv40nyF6whYibYjlTLNEiaFvbr7taMe4JicrtA8wBZVSs9bzGAgVoxDw/132'
            : 'https://cdn.cblink.net/aiyaaa/ai-yaaa-logo.png'
        }
        alt=""
      />
      <div
        className={classNames('flex-1 items-start flex flex-col overflow-hidden', {
          'items-end': role === 'user',
        })}
      >
        <p className="text-xs text-neutral-400">6/6/2023, 9:06:18 AM</p>
        <div
          className={classNames('max-w-full flex mt-2 items-end gap-1', {
            'flex-row-reverse': role === 'user',
          })}
        >
          <div
            className={classNames('flex-1 p-3 bg-[#f4f6f8] dark:bg-[#1e1e20] rounded-md break-words overflow-hidden', {
              'bg-[#1e1e20] dark:bg-[#e1f2ff] text-white': role === 'user',
            })}
          >
            111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
          </div>
          <div className="text-sm flex-shrink-0">
            {role === 'assistant' && <div>刷新</div>}
            <div>复制</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatBody = () => {
  return (
    <main className="flex-1 overflow-auto scrollbar-track-red-100 w-full max-w-screen-xl m-auto p-4 scroll-bar-none">
      {Array.from({ length: 10 }).map((_, index) => (
        <ChatItem key={index} role={index % 2 === 0 ? 'user' : 'assistant'} />
      ))}
    </main>
  );
};

const Chat = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <ChatBody />
      <Footer />
    </div>
  );
};

export default Chat;
