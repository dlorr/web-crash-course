import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobList from "../components/JobList";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      <Hero title="Test Title" subtitle="Test Subtitle" />

      <HomeCards />

      <JobList isHome={true} />

      <ViewAllJobs />
    </>
  );
};
export default HomePage;
