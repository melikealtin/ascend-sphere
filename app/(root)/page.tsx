import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

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
    </>
  );
}
