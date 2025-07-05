import { useState } from "react";
import axios from "axios";
import BusinessForm from "./components/BusinessForm";
import ResultCard from "./components/ResultCard";
import Spinner from "./components/Spinner";

function App() {
  const [businessData, setBusinessData] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/business-data", formData);
      setBusinessData({ ...formData, ...res.data });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = async () => {
    const { name, location } = businessData;
    try {
      const res = await axios.get("http://localhost:4000/regenerate-headline", {
        params: { name, location },
      });
      setBusinessData({ ...businessData, headline: res.data.headline });
    } catch (err) {
      console.error("Regenerate error:", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        GrowthProAI Dashboard
      </h1>

      <BusinessForm onSubmit={handleSubmit} />

      {loading && <Spinner />}

      {businessData && !loading && (
        <ResultCard data={businessData} onRegenerate={handleRegenerate} />
      )}
    </div>
  );
}

export default App;

