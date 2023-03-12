import { Item } from "../App";

export const SummaryItem = (props: Item) => {
const lowercaseCategory = props.category.toLowerCase();
  return (
    <div
      class={`summary-item ${lowercaseCategory}-bgColor rounded p-3 px-4 flex flex-row justify-between items-center gap-4`}
    >
      <div class="flex flex-row gap-4 items-center">
          <img src={props.icon} alt={props.category} />
        <div class="flex flex-col items-start justify-center">
          <p class={`${lowercaseCategory}-color`}>{props.category}</p>
        </div>
      </div>
      <div>
        <p class={"light-grey-blue"} >
          <span class={"dark-grey-blue extra-bold"}>{props.score}</span> / 100
        </p>
      </div>
    </div>
  );
};
