import WorkItem from "./WorkItem";

const data = [
    { year: 2024, title: "Liberta Yazılım Şirketi", duration: "", details: "FrontEnd Developer Intern" },
    { year: 2023, title: "Liberta Yazılım Şirketi", duration: "4 months", details: "Software Developer Intern" },
    { year: 2020, title: "Manisa Celal Bayar Üniversitesi", duration: "4 years", details: "Devam Ediyor" },
    { year: 2019, title: "Gaziantep Anadolu Lisesi", duration: "4 years", details: "Tamamlandı" },
];

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold mb-2 text-center text-[#001b5e]">Work</h1>
            {data?.map((item, index) => (
                <WorkItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;
