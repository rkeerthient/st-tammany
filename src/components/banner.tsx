import {
  Address,
  AddressType,
  getDirections,
  HoursStatus,
  HoursTable,
  Image,
} from "@yext/pages-components";
import { ComplexImage, Hours as _Hours } from "@yext/types";
import StarRating from "./starRating";
import Hours from "./hours";

interface LocationProps {}

interface BannerProp {
  headshot?: ComplexImage;
  reviews?: number;
  reviewsAverage?: number;
  group?: string;
  name?: string;
  hours?: _Hours;
  photo?: ComplexImage;
  address?: AddressType;
  mainPhone?: string;
  fax?: string;
  showCTAs?: boolean;
  services?: string[];
  timezone: string;
  speciality?: string;
  network?: string;
}

interface BannerProps {
  type: BannerProp;
  direction: "LTR" | "RTL";
}

const Banner = ({ type, direction }: BannerProps) => {
  const {
    name,
    hours,
    photo,
    headshot,
    reviews,
    reviewsAverage,
    group,
    address,
    mainPhone,
    showCTAs = false,
    services,
    timezone,
    speciality,
    network,
    fax,
  } = type;
  return (
    <section className="flex flex-col ">
      {direction === "LTR" ? (
        <section className={`flex flex-col md:flex-row h-96`}>
          <article className="w-full flex flex-col md:w-1/3 border  p-6 gap-6 bg-[#94579a] text-white">
            <p className="text-4xl ">{name}</p>
            <HoursStatus hours={hours} timezone={timezone} />
          </article>
          <article className="w-full md:w-2/3 border h-full">
            <Image image={photo} className="h-full w-full object-cover" />
          </article>
        </section>
      ) : (
        <section className={`flex flex-col md:flex-row h-96`}>
          <article className="w-full flex flex-col md:w-1/3 border">
            <Image image={photo} className="h-full w-full object-cover" />
          </article>
          <article
            className={`w-full md:w-2/3 border h-full   bg-[#94579a]  px-16 py-4  text-white`}
          >
            <div className="flex flex-col gap-1">
              <p className=" text-4xl ">{name}</p>
              <p className="text-lg">{network}</p>
              <p>{speciality}</p>
              <HoursStatus hours={hours} timezone={timezone} />
              <div>
                <StarRating selectedStars={5} />
              </div>
              <p>{reviewsAverage} out of 5</p>
              <p>{reviews} reviews</p>
            </div>
            {showCTAs && (
              <div className="flex flex-col gap-2 mt-8">
                <div className="cursor-pointer order-2 border-white w-[200px] px-4 rounded-md py-2 flex justify-center text-[#6f2082] bg-white hover:bg-[#6f2082] hover:text-white">
                  Make an Appointment
                </div>
                <div className="cursor-pointer border-2 border-white w-[200px] px-4 rounded-md py-2 flex justify-center text-white hover:bg-[#6f2082] hover:text-white">
                  Call me
                </div>
              </div>
            )}
          </article>
        </section>
      )}

      <section className={`flex flex-col md:flex-row`}>
        {direction === "LTR" ? (
          <article className="w-full flex flex-col md:w-1/3 border p-6 bg-[#f4f3f8] items-center justify-center">
            <div className="flex flex-col gap-4 mt-8">
              <div className="cursor-pointer border-2 border-white w-[200px] px-4 rounded-md py-3 flex justify-center  bg-[#6f2082]  text-white hover:opacity-85">
                Make an Appointment
              </div>
              <div className="cursor-pointer border-2   w-[200px] px-4 rounded-md py-3 flex justify-center border-[#6f2082] text-[#6f2082] hover:bg-[#6f2082] hover:text-white">
                Get Directions
              </div>
            </div>
          </article>
        ) : (
          <article className="w-full flex flex-col md:w-1/3 border p-6 bg-[#f4f3f8] text-[#702082]">
            <h3 className="text-lg text-[#702082]">Services</h3>
            <ul className="list-disc">
              {services?.map((item, index) => (
                <li className="ml-4 py-2 text-black" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        )}
        <article className="w-full md:w-2/3 border h-full flex flex-col md:flex-row text-[#5d5d5d]">
          <article className="w-full md:w-1/2 flex flex-col p-8 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg text-[#702082]">Address</h3>
              <Address
                address={address}
                typeof={typeof Address}
                lines={[["line1", "city", ",", "region", "postalCode"]]}
              />
              <div>
                <a className="underline" href={getDirections(address)}>
                  Get Directions
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg text-[#702082]">Contact</h3>
              <p>Phone: {formatPhoneNumber(mainPhone)}</p>
              <p>Fax: {formatPhoneNumber(fax)}</p>
            </div>
          </article>
          <article className="w-full md:w-1/2 p-8">
            <h3 className="text-lg text-[#702082] mb-2">Hours</h3>
            <Hours hours={hours} timezone="" />
          </article>
        </article>
      </section>
    </section>
  );
};

export default Banner;

function formatPhoneNumber(phoneNumber: any) {
  // Extract digits from the input number
  const digits = phoneNumber.replace(/\D/g, ""); // Remove all non-numeric characters

  // Ensure the number has at least 10 digits
  if (digits.length !== 11 || !digits.startsWith("1")) {
    throw new Error("Invalid phone number format");
  }

  // Extract the relevant parts (area code, first 3, last 4)
  const areaCode = digits.substring(1, 4);
  const firstThree = digits.substring(4, 7);
  const lastFour = digits.substring(7, 11);

  // Return formatted phone number
  return `(${areaCode}) ${firstThree}-${lastFour}`;
}
