import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const params = { search: query || null };

  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params,
  });

  return (
    <>
      <section className="blue_container">
        <div className="background_pattern" />
        <div className="content_wrapper">
          <h1 className="heading">
            Pitch Your Startup,{" "}
            <span className="heading_highlight">
              Connect With Entrepreneurs
            </span>
          </h1>

          <p className="sub-heading">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions
          </p>
          <SearchForm query={query} />
        </div>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No posts found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
