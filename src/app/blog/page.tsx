"use client";

import PageTitle from "../components/shared/PageTitle";
import Pagination from "../components/shared/Pagination";
import Post from "../components/shared/Post";
import { posts } from "../data/posts";
import AppLayout from "../components/AppLay";

const Blog = () => {
  return (
    <AppLayout>
      <PageTitle
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "" },
        ]}
      >
        Blog
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-8 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <Post
                href={`/blog/${post.id}`}
                thumbnailUrl={post.thumbnailUrl}
                title={post.title}
                publishedAt={post.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Pagination />
        </div>
      </div>
    </AppLayout>
  );
};

export default Blog;
