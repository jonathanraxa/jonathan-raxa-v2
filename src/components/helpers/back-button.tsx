import React from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  classNames?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ classNames = "" }) => {
  const navigate = useNavigate();

  return (
    <Button variant="ghost" onClick={() => navigate(-1)} className={classNames}>
      <FontAwesomeIcon icon={faArrowLeft} /> Go back
    </Button>
  );
};
