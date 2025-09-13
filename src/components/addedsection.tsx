import { Clock, Wallet, Headphones } from "lucide-react";

const AddedSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Why Choose <span className="text-blue-600">LaundryPro</span>?
        </h2>
        <p className="text-[20px] text-gray-500 max-w-3xl mx-auto mb-12">
          Other laundry services often fall short. Here’s how LaundryPro solves
          those problems with our advanced features and customer-first approach.
        </p>

        {/* Solutions Card */}
        <div className="bg-white p-10 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {/* Solution 1 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg">
                24–48 Hour Turnaround
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Guaranteed quick delivery to save your time.
              </p>
            </div>

            {/* Solution 2 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-100">
                <Wallet className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg">
                Transparent Pricing
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Affordable rates with no hidden charges.
              </p>
            </div>

            {/* Solution 3 */}
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100">
                <Headphones className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg">
                Dedicated Support
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Friendly help whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddedSection;
