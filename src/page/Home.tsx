import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  return (
    <div>
      <div>
        <div className="container mt-4">
          <button className="bg-red-500 px-6 mx-3">
            <span>+</span>
          </button>
          <span>{value}</span>
          <button className="bg-red-500 px-6 mx-3">
            <span>-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
