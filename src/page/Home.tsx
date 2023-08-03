import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/features/counter/CounterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";

const Home = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div>
        <div className="container mt-4">
          <button
            className="bg-red-500 px-6 mx-3"
            onClick={() => dispatch(increment())}
          >
            <span>+</span>
          </button>
          <span>{value}</span>
          <button
            className="bg-red-500 px-6 mx-3"
            onClick={() => dispatch(decrement())}
          >
            <span>-</span>
          </button>
          <button
            className="bg-red-500 px-6 mx-3"
            onClick={() => {
              dispatch(incrementByAmount(10));
            }}
          >
            +10
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
