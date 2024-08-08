export default async function Hero(){
    return(
        <section className="container my-12">
           <h1 className="text-4xl font-bold text-center">
            Start looking<br />for your dream job
            </h1>
            {/* <p className="text-center text-gray-600 mt-2"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium minus at aut ratione saepe nemo accusantium debitis 
            </p> */}
            <form className="flex gap-2 mt-4 max-w-md mx-auto">
                <input type="search" 
                className="border border-gray-400 w-full py-2 px-3 rounded-md" 
                placeholder="Search Phrase .."/>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                    Search
                </button>
            </form>
        </section>
    )
}