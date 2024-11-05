import Sandbox from "@/components/pages/Sandbox";

interface PageProps {
  params: {
    category: string[]
  }
}

const page = ({ params }: PageProps) => {
  return <Sandbox apiCategory={params.category} />;
};

export default page;
