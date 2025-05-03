import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
          Waste Classification Guide
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Organic Waste */}
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-green-600">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Organic Waste</h2>
            <p className="mb-2 text-gray-700">
              Includes: Vegetables, fruits, expired food, meat, leftovers.
            </p>
            <p className="text-sm text-gray-600">
              These should be placed in organic bags before disposal into green bins.
            </p>
          </div>

          {/* Recyclable Waste */}
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Recyclable Waste</h2>
            <p className="mb-2 text-gray-700">
              Includes: Paper, cardboard, plastic (non-hazardous), metals, glass, wooden items, rubber.
            </p>
            <p className="text-sm text-gray-600">
              Ensure items are clean and dry before recycling.
            </p>
          </div>

          {/* Hazardous Waste */}
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-red-500">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Hazardous Waste</h2>
            <p className="mb-2 text-gray-700">
              Includes: Pesticide containers, batteries, cosmetics containers, light bulbs, mercury thermometers.
            </p>
            <p className="text-sm text-gray-600">
              Handle with care and dispose in dedicated red bins.
            </p>
          </div>

          {/* Other Waste */}
          <div className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-yellow-500">
            <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Other Waste</h2>
            <p className="mb-2 text-gray-700">
              Includes: Clothes, shoes, diapers, sanitary pads, gloves, pens, lighters, pet waste, animal carcasses, toothbrushes.
            </p>
            <p className="text-sm text-gray-600">
              Put these in separate bags and dispose into yellow bins.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Use Smart Features for Better Waste Management:
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/classify/image"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Classify Waste by Image
            </Link>
            <Link
              to="/classify/iot"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Classify with IoT Smart Bin
            </Link>
            <Link
              to="/iot-control"
              className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition"
            >
              Open Smart Bin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;