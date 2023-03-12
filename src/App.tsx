import type { Component } from "solid-js";
import { createResource, For } from "solid-js";
import { SummaryItem } from "./components/SummaryItem";
import { fetchedData } from "./utils";

export type Item = {
  category: string;
  score: number;
  icon: string;
  color: string;
};

const App: Component = () => {
  const [data] = createResource(fetchedData);

  return (
    <div
      class={"sm:flex max-w-2xl mx-auto justify-center items-center h-screen"}
    >
      <div class="fly shadow-xl rounded-3xl flex flex-col sm:flex-row gap-4">
        <div class="card-gradient rounded-b-3xl sm:rounded-3xl py-8 px-12 flex flex-1 flex-col items-center gap-8">
          <h1 class={"text-xl"}>Your Result</h1>
          <div class="circle-gradient w-40 h-40 rounded-full flex flex-col items-center justify-center">
            <h2 class={"extra-bold text-6xl text-white"}>78</h2>
            <p class={"text-l text-center"}>of 100</p>
          </div>
          <div class="flex flex-col items-center gap-2">
            <h3 class={"bold text-2xl text-white"}>Great</h3>
            <p class={"text-center"}>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div class={"p-8 flex flex-1 flex-col"}>
          <h4 class={"dark-grey-blue bold text-xl"}>Summary</h4>
          <div class={"py-8 flex flex-col gap-4"}>
            <For each={data()}>{(item: Item) => <SummaryItem {...item} />}</For>
          </div>
          <button class="px-16 py-4 rounded-3xl">
            <p class="text-white">Continue</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
