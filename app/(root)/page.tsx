import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: "1",
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Melo" },
      description: "this is a description",
      image:
        "https://images.unsplash.com/photo-1740442829327-4d7a922811fa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We robots",
    },
  ];

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
    </>
  );
}
