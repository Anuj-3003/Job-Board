import Joblist from "./Joblist";

export default function Jobs() {
    return (
        <div className="bg-slate-200 py-4 rounded-3xl">
            <div className="container">
            <h2 className="font-bold mb-4"> Recent Jobs</h2>
            <div className="flex flex-col gap-3">
            
            <Joblist />
            <Joblist />
            <Joblist />
            <Joblist />

            </div>

            </div>
        </div>
    );
}