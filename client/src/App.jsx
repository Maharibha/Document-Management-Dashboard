import { useState } from "react";
import { FaBell, FaCloudUploadAlt, FaFilePdf, FaCheckCircle } from "react-icons/fa";

function App() {
  const [files, setFiles] = useState([]);
  const [notifications, setNotifications] = useState([
    { message: "Dashboard loaded successfully", type: "info" },
  ]);

  const handleUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const newFiles = selectedFiles.map((file) => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
      status: "Uploading",
      progress: 0,
      date: new Date().toLocaleDateString(),
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    if (selectedFiles.length > 3) {
      setNotifications((prev) => [
        { message: `Upload in progress — processing ${selectedFiles.length} files in background`, type: "info" },
        ...prev,
      ]);
    }

    newFiles.forEach((file, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;

        setFiles((prev) =>
          prev.map((item) =>
            item.name === file.name
              ? {
                  ...item,
                  progress,
                  status: progress >= 100 ? "Completed" : "Uploading",
                }
              : item
          )
        );

        if (progress >= 100) {
          clearInterval(interval);
          setNotifications((prev) => [
            { message: `${file.name} uploaded successfully`, type: "success" },
            ...prev,
          ]);
        }
      }, 300 + index * 100);
    });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center shadow">
        <div>
          <h1 className="text-3xl font-bold">DocuFlow</h1>
          <p className="text-blue-100">Document Management Dashboard</p>
        </div>

        <div className="relative">
          <FaBell className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
            {notifications.length}
          </span>
        </div>
      </header>

      <main className="p-8">
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Upload and manage company PDFs</h2>
          <p className="text-blue-100">
            Track upload progress, manage files, and receive smart notifications.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <FaFilePdf className="text-blue-600 text-3xl mb-3" />
            <h3 className="font-bold text-xl">{files.length}</h3>
            <p className="text-gray-500">Total Documents</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <FaCloudUploadAlt className="text-blue-600 text-3xl mb-3" />
            <h3 className="font-bold text-xl">
              {files.filter((file) => file.status === "Uploading").length}
            </h3>
            <p className="text-gray-500">Uploading</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <FaCheckCircle className="text-green-600 text-3xl mb-3" />
            <h3 className="font-bold text-xl">
              {files.filter((file) => file.status === "Completed").length}
            </h3>
            <p className="text-gray-500">Completed</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 bg-white rounded-3xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>

            <div className="border-2 border-dashed border-blue-300 rounded-2xl p-10 text-center bg-blue-50">
              <FaCloudUploadAlt className="mx-auto text-5xl text-blue-600 mb-4" />
              <p className="font-semibold">Select one or more PDF files</p>
              <p className="text-gray-500 text-sm mb-4">
                Each file will show its own progress bar
              </p>

              <input
                type="file"
                multiple
                accept="application/pdf"
                onChange={handleUpload}
                className="block mx-auto"
              />
            </div>

            <div className="mt-6 space-y-4">
              {files.map((file, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{file.name}</span>
                    <span>{file.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{ width: `${file.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>

            <div className="space-y-4">
              {notifications.map((note, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border ${
                    note.type === "success"
                      ? "bg-green-50 border-green-200 text-green-700"
                      : "bg-blue-50 border-blue-200 text-blue-700"
                  }`}
                >
                  <p className="font-semibold">{note.message}</p>
                  <p className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</p>
                </div>
              ))}
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
              {files.map((file, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{file.name}</td>
                  <td className="p-4">{file.size}</td>
                  <td className="p-4">{file.date}</td>
                  <td
                    className={`p-4 font-semibold ${
                      file.status === "Completed" ? "text-green-600" : "text-blue-600"
                    }`}
                  >
                    {file.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;