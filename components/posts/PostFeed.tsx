import usePosts from "@/hooks/usePosts";
import { FC } from "react";
import PostItem from "./PostItem";

export interface PostFeedProps {
  userId?: string;
}

const PostFeed: FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: Record<string, any>) => {
        return <PostItem key={post.id} userId={userId} data={post} />;
      })}
    </>
  );
};

export default PostFeed;
