"use client";

import { useParams } from "next/navigation";
import { useMutation, useQuery } from "react-query";
import { PostService } from "services/posts-service";

const usePosts = () => {
  const { id } = useParams(); // if needed
  const page = 1;
  const size = 10;

  // get //
  const {
    data: GetPostData,
    isLoading: PostLoader,
    isFetching: PostFetching,
    refetch: postRefetch,
  } = useQuery("posts", () => PostService.getPost());

  const {
    data: GetPostDataWithQueryParam,
    isLoading: PostLoaderWithQueryParam,
    isFetching: PostFetchingWithQueryParam,
    refetch: postRefetchWithQueryParam,
  } = useQuery(["postsParameter", page, size], () =>
    PostService.getPost({ page, size })
  );

  const {
    data: GetPostDataById,
    isLoading: PostLoaderById,
    refetch: postRefetchById,
  } = useQuery(["postsById", id], () => PostService.getPostById(id));

  //post//
  const { mutateAsync: StorePost, isLoading: StorePostLoader } = useMutation(
    "addData",
    () => PostService.addPost()
  );

  //put//
  const { mutateAsync: EditPost, isLoading: EditPostLoader } = useMutation(
    ["editData", id],
    () => PostService.editPost(id)
  );

  //patch//
  const { mutateAsync: EditPartialPost, isLoading: EditPartialPostLoader } =
    useMutation(["editPartialData", id], () => PostService.editPartialPost(id));

  //delete//
  const { mutateAsync: DeletePost, isLoading: DeletePostLoader } = useMutation(
    "editPartialData",
    (id) => PostService.deletePost(id)
  );

  return {
    ///get///
    GetPostData,
    PostLoader,
    PostFetching,
    postRefetch,
    GetPostDataById,
    PostLoaderById,
    postRefetchById,
    GetPostDataWithQueryParam,
    PostLoaderWithQueryParam,
    PostFetchingWithQueryParam,
    postRefetchWithQueryParam,
    /// post ///
    StorePost,
    StorePostLoader,
    /// edit ///
    EditPost,
    EditPostLoader,
    /// edit partial///
    EditPartialPost,
    EditPartialPostLoader,
    ///delete///
    DeletePost,
    DeletePostLoader,
  };
};

export default usePosts;
