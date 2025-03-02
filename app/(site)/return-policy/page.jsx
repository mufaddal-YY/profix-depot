import PortableTextComponent from "@/components/ui/PortableTextComponent";
import { Separator } from "@/components/ui/separator";
import { getReturnPolicyData } from "@/sanity/fetchedData";

const ReturnPolicy = async () => {
  const policyData = await getReturnPolicyData();

  return (
    <main className="items-center bg-white">
      <section className="py-[50px] container">
        {policyData.map((data, idx) => (
          <article className="p-4" key={idx}>
            <h4 className="mb-2 text-2xl lg:text-3xl text-[#E36C0A] font-semibold leading-snug lg:leading-snug">
              {data?.headline}
            </h4>
            <Separator className="my-4" />

            <PortableTextComponent content={data?.content} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default ReturnPolicy;
