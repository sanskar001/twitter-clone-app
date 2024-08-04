import { useCallback, useMemo } from "react";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";
import useCurrentUser from "./userCurrentUser";
import toast from "react-hot-toast";
import axios from "axios";
import usePost from "./usePost";
import usePosts from "./usePosts";

const useLike = ({ postId, userId }: { postId: string; userId: string }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);

  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likeIds || [];

    return list.includes(currentUser?.id);
  }, [currentUser?.id, fetchedPost]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasLiked) {
        request = axios.delete("/api/like/", { data: { postId } });
      } else {
        request = axios.post("/api/like/", { postId });
      }

      await request;

      mutateFetchedPost();
      mutateFetchedPosts();

      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }, [
    currentUser,
    loginModal,
    hasLiked,
    mutateFetchedPost,
    mutateFetchedPosts,
    userId,
    postId,
  ]);

  return { hasLiked, toggleLike };
};

export default useLike;
