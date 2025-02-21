interface ExternalResourcesProps {
  label: string;
  link: string;
}

interface ServicesResourcesProps {
  name: string;
  description: string;
}

interface InsuranceProps {
  insurances: (ExternalResourcesProps | string | ServicesResourcesProps)[];
  showBullet?: boolean;
  title: string;
}

const Insurance = ({
  insurances,
  showBullet = false,
  title,
}: InsuranceProps) => {
  return (
    <section className="space-y-4">
      <h3 className="text-[#702082] text-2xl">{title}</h3>
      <ul
        className={`grid grid-cols-1 md:grid-cols-3 ${
          showBullet ? `bg-[#ededed] list-disc` : `bg-white`
        } gap-4`}
      >
        {insurances.map((item, index) => (
          <li
            key={index}
            className={`${
              showBullet ? `p-2 underline  ` : `p-3`
            } text-sm w-full text-[#58595b] bg-[#ededed] flex flex-col items-start space-y-1`}
          >
            {typeof item === "string" ? (
              <p className="w-full text-center">{item}</p>
            ) : "link" in item ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <>
                <h4 className="font-semibold text-[#58595b] text-lg underline">
                  {item.name}
                </h4>
                <p className="text-base text-gray-600">{item.description}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Insurance;
