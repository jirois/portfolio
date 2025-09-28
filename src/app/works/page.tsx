"use client";

import PageTitle from "../components/shared/PageTitle";
import Portfolio from "../components/shared/portfolio";
import { works } from "../data/works";
import AppLayout from "../components/AppLay";

export default function WorkPage() {
  return (
    <AppLayout>
      <PageTitle
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Works", path: "" },
        ]}
      >
        Works
      </PageTitle>

      <div className="container py-10">
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 75}ms`,
              }}
            >
              <Portfolio
                imageUrl={work.thumbnailUrl}
                category={work.category}
                title={work.title}
                href={`/works/${work.id}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <button
            type="submit"
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: "#ff4c60",
              color: "white",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e64456";
              e.currentTarget.style.boxShadow =
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ff4c60";
              e.currentTarget.style.boxShadow =
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
            }}
          >
            Load more
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
