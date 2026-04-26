import SubPoint from "@/components/ui/SubPoint";

function Diamond() {
  return <span className="mt-2 shrink-0 w-2 h-2 rotate-45 bg-gray-700 inline-block" />;
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 pb-24 max-w-3xl">
      <ul className="flex flex-col gap-4">

        <li className="border border-gray-200 rounded-xl p-5 transition-shadow duration-200 hover:shadow-md bg-white">
          <div className="flex items-start gap-3 text-gray-500 font-normal text-base">
            <Diamond />
            <span>
              Incoming Mobile App Team @{" "}
              <a
                href="https://www.shopify.com/ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium underline"
              >
                Shopify
              </a>
            </span>
          </div>
          <ul className="flex flex-col gap-1.5 mt-2 ml-5">
          </ul>
        </li>

        <li className="border border-gray-200 rounded-xl p-5 transition-shadow duration-200 hover:shadow-md bg-white">
          <div className="flex items-start gap-3 text-gray-500 font-normal text-base">
            <Diamond />
            <span>
              Customer Account &amp; Login Team @{" "}
              <a
                href="https://www.shopify.com/ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium underline"
              >
                Shopify
              </a>
            </span>
          </div>
          <ul className="flex flex-col gap-1.5 mt-2 ml-5">
            <SubPoint>Made impactful design changes for millions of customer account profiles that use Shopify built stores.</SubPoint>
            <SubPoint>Designed webhooks used by popular email marketing providers.</SubPoint>
          </ul>
        </li>

        <li className="border border-gray-200 rounded-xl p-5 transition-shadow duration-200 hover:shadow-md bg-white">
          <div className="flex items-start gap-3 text-gray-500 font-normal text-base">
            <Diamond />
            Founder of IAMB Games
          </div>
          <ul className="flex flex-col gap-1.5 mt-2 ml-5">
            <SubPoint>Professional Game Design Studio</SubPoint>
            <SubPoint>Have an international team of contractors</SubPoint>
            <SubPoint>Worked with 50+ clients</SubPoint>
          </ul>
        </li>

      </ul>
    </section>
  );
}
