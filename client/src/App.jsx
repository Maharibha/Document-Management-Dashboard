import { FaBell, FaCloudUploadAlt, FaFilePdf, FaCheckCircle } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center shadow">
        <div>
          <h1 className="text-3xl font-bold">DocuFlow</h1>
          <p className="text-blue-100">Document Management Dashboard</p>
        </div>
        <div className="relative">
          <FaBell className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">3</span>
        </div>
      </header>

      <main className="p-8">
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Upload and manage company PDFs</h2>
          <p className="text-blue-100">
            Track individual upload progress, manage files, and receive real-time notifications.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <FaFilePdf className="text-blue-600 text-3xl mb-3" />
            <h3 className="font-bold text-xl">12</h3>
            <p className="text-gray-500">Total Documents</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <FaCloudUploadAlt className="text-blue-600 text-3xl mb-3" />
            <h3 className="font-bold text-xl">4</h3>
            <p className="text-gray-500">Uploads Today</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <FaCheckCircle className="text-green-600 text-3xl mb-3" />
            <h3 className="font-bold text-xl">8</h3>
            <p className="text-gray-500">Completed</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white rounded-3xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>

            <div className="border-2 border-dashed border-blue-300 rounded-2xl p-10 text-center bg-blue-50">
              <FaCloudUploadAlt className="mx-auto text-5xl text-blue-600 mb-4" />
              <p className="font-semibold">Drag & drop PDF files here</p>
              <p className="text-gray-500 text-sm mb-4">or select multiple files from your device</p>
              <input type="file" multiple accept="application/pdf" className="block mx-auto" />
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>company_policy.pdf</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="font-semibold text-green-700">Upload completed</p>
                <p className="text-sm text-gray-500">3 files uploaded successfully</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="font-semibold text-blue-700">Processing</p>
                <p className="text-sm text-gray-500">Bulk upload running in background</p>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-3xl p-6 shadow mt-8">
          <h2 className="text-2xl font-bold mb-4">Uploaded Documents</h2>

          <table className="w-full">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="p-4 rounded-l-xl">File Name</th>
                <th className="p-4">Size</th>
                <th className="p-4">Upload Date</th>
                <th className="p-4 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">company_policy.pdf</td>
                <td className="p-4">2.4 MB</td>
                <td className="p-4">Today</td>
                <td className="p-4 text-green-600 font-semibold">Completed</td>
              </tr>
              <tr>
                <td className="p-4">employee_guide.pdf</td>
                <td className="p-4">1.8 MB</td>
                <td className="p-4">Today</td>
                <td className="p-4 text-blue-600 font-semibold">Uploading</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;