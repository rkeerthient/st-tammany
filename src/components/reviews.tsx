import StarRating from "./starRating";
interface Review {
  dateCreated: string; // Format: YYYY-MM-DD
  description: string;
  value: string; // Assuming it's a string, but can be changed to `number` if needed
}

interface PatientExperienceProps {
  aggregate: string; // Assuming ratings are stored as strings; change to `number` if needed
  comments: string;
  description: string;
  ratings: string; // Assuming ratings are stored as strings; change to `number` if needed
  reviews: Review[];
  name: string;
}
interface REviewsProps {
  patientExp: PatientExperienceProps;
  name: string;
}
const Reviews = ({ patientExp, name }: REviewsProps) => {
  return (
    <section className="space-y-4">
      <h3 className="text-[#702082] text-2xl">Reviews for {name}</h3>
      <p>{patientExp.description}</p>
      <p>
        {patientExp.aggregate} out of 5 ({patientExp.ratings} ratings,{" "}
        {patientExp.comments} comments)
      </p>
      <article className="flex flex-col gap-2">
        {patientExp.reviews.map((item, index) => (
          <div key={index} className="flex border-b py-2">
            <div className="w-1/4 flex flex-col">
              <div>
                <StarRating selectedStars={item.value} color={"#6f2082"} />
              </div>
              <p>{item.dateCreated}</p>
            </div>
            <div className="w-full">
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Reviews;
