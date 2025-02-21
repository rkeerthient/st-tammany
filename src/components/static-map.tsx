type Coordinates = {
  latitude: string;
  longitude: string;
};

const StaticMap = (props: Coordinates) => {
  const { latitude, longitude } = props;

  return (
    <>
      <img
        className="w-full"
        width="300"
        height="200"
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=" +
          `${latitude}` +
          "," +
          `${longitude}` +
          "&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C" +
          `${latitude}` +
          "," +
          `${longitude}` +
          `&key=${import.meta.env.YEXT_PUBLIC_MAP_KEY}`
        }
      ></img>
    </>
  );
};

export default StaticMap;
