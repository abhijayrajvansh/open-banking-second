import { redirect } from 'next/navigation'

const page = () => {
  redirect("/apis/sandbox/corporate-payments");
};

export default page;
