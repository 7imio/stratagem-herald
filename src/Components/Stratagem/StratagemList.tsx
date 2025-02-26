import { useEffect, useState } from "react";
import axios from "axios";
import StratagemIcon from "./StratagemIcon";
import { Stratagem, StratagemType } from "../../Interfaces/Stratagem";

const StratagemList: React.FC = () => {
  const [stratagems, setStratagems] = useState<Stratagem[]>();

  const apiUrl = import.meta.env.VITE_API_URL || "malformé";

  useEffect(() => {
    axios.get(`${apiUrl}/api`).then((res) => {
      const data: Stratagem[] = res.data;

      setStratagems(sortStratagemsByType(data));
    });
  }, []);

  const sortStratagemsByType = (oldStratagems: Stratagem[]) => {
    const newStratagemList = [];
    newStratagemList.push(
      ...oldStratagems.filter((s) => s.type === StratagemType.MISSION)
    );
    newStratagemList.push(
      ...oldStratagems.filter((s) => s.type === StratagemType.OFFENSIVE)
    );
    newStratagemList.push(
      ...oldStratagems.filter((s) => s.type === StratagemType.SUPPORT)
    );
    newStratagemList.push(
      ...oldStratagems.filter((s) => s.type === StratagemType.DEFENSIVE)
    );
    return newStratagemList;
  };
  return (
    <div className="flex flex-row flex-wrap">
      {stratagems?.map((s) => (
        <StratagemIcon stratagem={s} />
      ))}
    </div>
  );
};

export default StratagemList;
