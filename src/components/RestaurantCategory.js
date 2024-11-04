import MenuItemCard from "./MenuItemCard";

const RestaurantCategory = ({ data, expand, setShowIndex }) => {
  const { title, itemCards } = data;

  return (
    <div>
      <div
        className="flex justify-between mx-auto mt-4 shadow-lg w-11/12 px-8 bg-gray-200 align-middle cursor-pointer"
        style={{ borderRadius: "5px" }}
        onClick={() => {
          setShowIndex();
        }}
      >
        <div className="font-bold text-lg flex items-center">
          {title} ({itemCards.length})
        </div>
        <div
          className={`text-lg font-bold pt-2 transition-transform duration-300 ${
            expand ? "rotate-180" : ""
          }`}
        >
          ⌃
        </div>
      </div>
      {expand && (
        <ul>
          {itemCards?.map((item) => (
            <MenuItemCard
              key={item?.card?.info?.id}
              itemInfo={{
                name: item?.card?.info?.name,
                price:
                  (item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100,
                rating: item?.card?.info?.ratings?.aggregatedRating,
                description: item?.card?.info?.description,
                img: item?.card?.info?.imageId,
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantCategory;
