import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  return (
    <div
      className="
    bg-neutral-900
      w-full
      h-full
      overflow-hidden
      overflow-y-auto
    "
    >
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-2xl font-bold">Welcome Back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
            <ListItem name="Liked Songs" image="/images/liked.png" />
          </div>
          <div className="mt-10">
            <h1 className="text-white text-2xl font-bold">Newest Songs</h1>
          </div>
          <PageContent songs={songs} />
        </div>
      </Header>
    </div>
  );
}
