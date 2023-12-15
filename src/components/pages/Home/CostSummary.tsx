const CostSummary = () => {
  // Define individual costs as an array of objects
  const costItems = [
    { name: "Natural Glam Look", cost: 200.0 },
    { name: "Add on 1", cost: 3.75 },
    { name: "Tax", cost: 5.0 },
  ];

  // Calculate total cost
  const totalCost = costItems.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="flex flex-col items-start gap-2 p-8">
      <div className="flex items-center gap-10">
        <h4 className="text-gray-800 font-bold">Cost Breakdown</h4>
        <div className="px-3 py-[1px] bg-gray-300 rounded-xl">
          <span className="font-semibold text-sm text-gray-500">
            Credit card
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full max-w-md">
        {costItems.map((item, index) => (
          <div key={index} className="flex justify-between w-full py-1">
            <span className="text-gray-800 font-medium">{item.name}</span>
            <span className="text-gray-600 font-medium">${item.cost.toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between w-full mt-2 border-t border-gray-200 py-3">
          <span className="text-gray-800 font-semibold">Total</span>
          <span className="text-gray-800 font-semibold">
            ${totalCost.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
