import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { FC, useCallback, useMemo } from "react";
import Avatar from "../Avatar";

interface CommentItemProps {
  data: Record<string, any>;
}

const CommentItem: FC<CommentItemProps> = ({ data }) => {
  const router = useRouter();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropgation();
      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition">
      <div className="flex items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex items-center gap-2">
            <p
              onClick={goToUser}
              className="text-white font-semibold cursor-pointer"
            >
              {data.user.name}
            </p>
            <span className="text-neutral-400 cursor-pointer hover:underline hidden md:block">
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
