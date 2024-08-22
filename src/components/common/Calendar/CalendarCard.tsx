import { format } from "date-fns";

// import { useControlledForm } from "@/hooks/common/useControlledForm";

const CalendarCard = ({ day }: { day: Date | "" }) => {
  //   const { modalClose, name } = useContext(DatePickerContext);
  //   const { handleButtonOnClick, field } = useControlledForm(name);
  //   const handleOnclick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     if (day) {
  //       handleButtonOnClick(e);
  //       modalClose();
  //     }
  //   };
  const value = day && day.toISOString();
  //   const isSelected = isSameDay(day, field.value);
  return (
    <button
      //   onClick={handleOnclick}
      value={value}
      className="flex justify-end p-2 rounded-full"
    >
      {day && format(day, "d")}
    </button>
  );
};

export default CalendarCard;

// export const datePickerCalendarCardStyle = (day: Date | "", isSelected: boolean) =>
//     css({
//       display: "flex",
//       justifyContent: "center",
//       padding: "8px",
//       cursor: day ? "pointer" : "cursor",
//       borderRadius: "50%",
//       color: isSelected ? Theme.color.white : Theme.color.black,
//       backgroundColor: isSelected ? Theme.color.brand_primary : "transparent",
//       border: isSameDay(day, new Date()) ? `1px solid ${Theme.color.brand_primary}` : "none",
//       ":hover": {
//         backgroundColor: day ? Theme.color.brand_primary : "transparent",
//         color: Theme.color.white,
//       },
//     });
//   );
// };
