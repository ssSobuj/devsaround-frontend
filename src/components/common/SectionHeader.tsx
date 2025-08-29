export default function SectionHeader({
  descriptionMaxWidth,
  title,
  description,
}: {
  descriptionMaxWidth?: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center  md:flex-row md:justify-start gap-4 lg:gap-10  mb-10 lg:mb-20">
      <h2 className="text-center md:text-start bg-primary w-fit font-medium rounded-[7px] px-[7px] leading-[100%] tracking-[0]">
        {title}
      </h2>
      <p
        style={{ maxWidth: descriptionMaxWidth }}
        className={`text-center md:text-left`}
      >
        {description}
      </p>
    </div>
  );
}
