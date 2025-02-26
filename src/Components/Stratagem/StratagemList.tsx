import { useEffect, useState } from "react";
import axios from "axios";
import StratagemIcon from "./StratagemIcon";
import { Stratagem } from "../../Interfaces/Stratagem";

const StratagemList: React.FC = () => {
  const [stratagems, setStratagems] = useState<Stratagem[]>();

  const apiUrl = import.meta.env.VITE_API_URL || "malformé";

  useEffect(() => {
    axios.get(`${apiUrl}/api`).then((res) => {
      console.log(res);
      setStratagems(res.data);
    });
  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {stratagems?.map((s) => (
        <StratagemIcon stratagem={s} />
      ))}
    </div>
  );
};

export default StratagemList;
