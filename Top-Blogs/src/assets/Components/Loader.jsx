 import { ScaleLoader } from "react-spinners";

const Loader = () => (
    <div className="flex  justify-center items-center min-h-[calc(100vh-116px)]">
        <ScaleLoader size={100} color="black" />
    </div>
);

export default Loader;