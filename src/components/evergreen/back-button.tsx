import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => navigate(-1)}
    >
      Back
    </Button>
  );
};
