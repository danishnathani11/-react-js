import { Plus, X } from 'lucide-react';

function DynamicList({ title, items, onChange, placeholder }) {
  const addItem = () => {
    onChange([...items, '']);
  };

  const removeItem = (index) => {
    onChange(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-semibold text-gray-700">
          {title}
        </label>
        <button
          type="button"
          onClick={addItem}
          className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      <div className="space-y-2">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500 italic py-2">
            No items added yet. Click "Add" to get started.
          </p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => updateItem(index, e.target.value)}
                placeholder={`${placeholder} ${index + 1}`}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="px-3 py-2.5 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DynamicList;
