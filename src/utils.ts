export const fetchedData = async () => (await fetch("./data.json")).json();

export const getColor = (name: string): { bg: string; text: string } => {
  switch (name) {
    case "Reaction":
      return { bg: "bg-[#EC625C]/5", text: "text-[#EC625C]" };
    case "Memory":
      return { bg: "bg-[#F4B546]/5", text: "text-[#F4B546]" };
    case "Verbal":
      return { bg: "bg-[#54B892]/5", text: "text-[#54B892]" };
    case "Visual":
      return { bg: "bg-[#1625CE]/5", text: "text-[#1625CE]" };

    default:
      return { bg: "bg-[#1625CE]/5", text: "text-[#1625CE]" };
  }
};
