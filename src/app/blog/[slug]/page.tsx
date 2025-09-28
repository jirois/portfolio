"use client";

import AppLayout from "../../components/AppLay";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import CommentBox from "../../components/partials/CommentBox";
import RecentComment from "../../components/partials/RecentComment";
import { posts } from "../../data/posts";
import { useParams } from "next/navigation";
import { useTheme } from "../../hooks/use-theme";

export default function BlogSingle() {
  const { theme } = useTheme();
  const params = useParams();
  const slug = params?.slug as string;

  // Debug: Check what slug we're getting
  console.log("Slug from useParams:", slug);
  console.log("Type of slug:", typeof slug);
  console.log(
    "Available posts:",
    posts.map((p) => ({ id: p.id, type: typeof p.id, title: p.title }))
  );

  // Try both string and number comparison to be safe
  const post = posts.find((post) => {
    const stringMatch = post.id.toString() === slug;
    const numberMatch = post.id === parseInt(slug);
    console.log(
      `Comparing post ${post.id} with slug ${slug}: string=${stringMatch}, number=${numberMatch}`
    );
    return stringMatch || numberMatch;
  });

  console.log("Found post:", post);

  // Handle post not found
  if (!post) {
    return (
      <AppLayout>
        <div className="container py-20">
          <div className="text-center">
            <h1
              className={`text-4xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Post Not Found
            </h1>
            <p
              className={`text-lg mb-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <p
              className={`text-sm mb-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Looking for slug: (type: {typeof slug})
            </p>
            <p
              className={`text-sm mb-8 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Available post IDs: {posts.map((p) => p.id).join(", ")}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container mb-10">
        {/* Breadcrumb */}
        <nav className="mt-8 mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                } transition-colors`}
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                theme === "dark" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              /
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                } transition-colors`}
              >
                Blog
              </Link>
            </li>
            <li
              className={`${
                theme === "dark" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              /
            </li>
            <li
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } truncate max-w-xs`}
            >
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="mt-16 flex flex-col items-center justify-center">
          <h1
            className={`text-center text-2xl font-semibold sm:text-3xl md:text-4xl max-w-4xl leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {post.title}
          </h1>
          <div
            className={`mt-6 flex items-center ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <time dateTime={post.publishedAt} className="text-sm">
              {post.publishedAt}
            </time>
            <span className="mx-3 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span className="text-sm">By {post.authorName}</span>
          </div>
        </div>

        <article>
          <div className="mt-12 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={post.imageUrl}
              width={1280}
              height={720}
              alt={post.title}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div
            className={`prose prose-lg mt-12 max-w-none mx-auto ${
              theme === "dark"
                ? "prose-invert prose-headings:text-white prose-p:text-gray-100 prose-strong:text-gray-200 prose-blockquote:text-gray-300 prose-blockquote:border-primary-500"
                : "prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-blockquote:text-gray-700 prose-blockquote:border-primary-500"
            } prose-headings:font-semibold prose-p:leading-relaxed prose-a:text-primary-500 hover:prose-a:text-primary-600 prose-blockquote:font-medium`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social sharing */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span
                className={`mb-4 sm:mb-0 text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Share this post:
              </span>
              <div className="flex space-x-4">
                <Link
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-200 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800"
                      : "text-gray-500 hover:text-blue-500 hover:bg-gray-100"
                  } hover:scale-110`}
                  aria-label="Share on Twitter"
                >
                  <FiTwitter className="w-5 h-5" />
                </Link>

                <Link
                  href={`https://www.facebook.com/sharer/sharer.php`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-200 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800"
                      : "text-gray-500 hover:text-blue-600 hover:bg-gray-100"
                  } hover:scale-110`}
                  aria-label="Share on Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </Link>

                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-200 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800"
                      : "text-gray-500 hover:text-blue-700 hover:bg-gray-100"
                  } hover:scale-110`}
                  aria-label="Share on LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </Link>

                <Link
                  href={`mailto:?subject=${encodeURIComponent(post.title)}`}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  } hover:scale-110`}
                  aria-label="Share via Email"
                >
                  <FiMail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Comments section */}
        <section className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <RecentComment />
            </div>
            <div>
              <CommentBox />
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
